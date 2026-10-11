const fs = require('fs');
const path = require('path');

// 32x32 Canvas for cursor
const W = 32;
const H = 32;

// Arrow polygon coordinates
// Tip is at (6, 4)
const poly = [
  [6, 4],
  [6, 23],
  [11, 18],
  [15, 27],
  [18, 25],
  [14, 16],
  [21, 16]
];

// Point in polygon test
function pointInPoly(x, y, vs) {
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][0], yi = vs[i][1];
    const xj = vs[j][0], yj = vs[j][1];
    const intersect = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

// Distance from point to line segment
function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  if (l2 === 0) return Math.hypot(px - x1, py - y1);
  let t = ((px - x1) * dx + (py - y1) * dy) / l2;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

// Distance from point to polygon boundary
function distToPolyEdge(px, py, vs) {
  let minD = Infinity;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const d = distToSegment(px, py, vs[i][0], vs[i][1], vs[j][0], vs[j][1]);
    if (d < minD) minD = d;
  }
  return minD;
}

// RGBA buffer
const rgba = Buffer.alloc(W * H * 4);

for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const idx = (y * W + x) * 4;
    const inside = pointInPoly(x + 0.5, y + 0.5, poly);
    const edgeDist = distToPolyEdge(x + 0.5, y + 0.5, poly);

    if (inside) {
      if (edgeDist < 1.2) {
        // White border
        rgba[idx] = 255;
        rgba[idx + 1] = 255;
        rgba[idx + 2] = 255;
        rgba[idx + 3] = 255;
      } else {
        // Black body
        rgba[idx] = 10;
        rgba[idx + 1] = 12;
        rgba[idx + 2] = 16;
        rgba[idx + 3] = 255;
      }
    } else {
      if (edgeDist <= 1.3) {
        // White outer stroke
        const a = Math.min(1, Math.max(0, 1.4 - edgeDist + 0.5));
        rgba[idx] = 255;
        rgba[idx + 1] = 255;
        rgba[idx + 2] = 255;
        rgba[idx + 3] = Math.round(255 * a);
      } else if (edgeDist <= 5.5) {
        // Glowing cyan/blue aura
        const glowFactor = Math.max(0, 1 - (edgeDist - 1.3) / 4.2);
        // color: #38bdf8 (56, 189, 248) -> glowing blue
        rgba[idx] = 56;
        rgba[idx + 1] = 189;
        rgba[idx + 2] = 248;
        rgba[idx + 3] = Math.round(210 * Math.pow(glowFactor, 1.6));
      } else {
        // Transparent
        rgba[idx] = 0;
        rgba[idx + 1] = 0;
        rgba[idx + 2] = 0;
        rgba[idx + 3] = 0;
      }
    }
  }
}

// Build Windows .CUR file with 32-bit DIB
function createCurFile(width, height, rgbaBuf, hotX, hotY) {
  const xorSize = width * height * 4;
  const andRowSize = Math.ceil(width / 32) * 4;
  const andSize = andRowSize * height;
  const biSize = 40; // BITMAPINFOHEADER

  const dibSize = biSize + xorSize + andSize;
  const totalSize = 6 + 16 + dibSize;

  const buf = Buffer.alloc(totalSize);

  // CUR Header
  buf.writeUInt16LE(0, 0); // reserved
  buf.writeUInt16LE(2, 2); // 2 = CUR (cursor)
  buf.writeUInt16LE(1, 4); // 1 image

  // Dir entry
  buf.writeUInt8(width, 6);
  buf.writeUInt8(height, 7);
  buf.writeUInt8(0, 8); // color count
  buf.writeUInt8(0, 9); // reserved
  buf.writeUInt16LE(hotX, 10); // hotspot X
  buf.writeUInt16LE(hotY, 12); // hotspot Y
  buf.writeUInt32LE(dibSize, 14); // image size
  buf.writeUInt32LE(22, 18); // offset

  // BITMAPINFOHEADER
  let p = 22;
  buf.writeUInt32LE(40, p); p += 4;
  buf.writeInt32LE(width, p); p += 4;
  buf.writeInt32LE(height * 2, p); p += 4; // height * 2 for icon/cur
  buf.writeUInt16LE(1, p); p += 2; // planes
  buf.writeUInt16LE(32, p); p += 2; // bpp
  buf.writeUInt32LE(0, p); p += 4; // compression
  buf.writeUInt32LE(xorSize + andSize, p); p += 4; // image size
  buf.writeInt32LE(0, p); p += 4;
  buf.writeInt32LE(0, p); p += 4;
  buf.writeUInt32LE(0, p); p += 4;
  buf.writeUInt32LE(0, p); p += 4;

  // DIB rows are bottom-to-top, BGRA
  for (let y = height - 1; y >= 0; y--) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      const r = rgbaBuf[srcIdx];
      const g = rgbaBuf[srcIdx + 1];
      const b = rgbaBuf[srcIdx + 2];
      const a = rgbaBuf[srcIdx + 3];

      buf[p++] = b;
      buf[p++] = g;
      buf[p++] = r;
      buf[p++] = a;
    }
  }

  // 1-bit AND mask (all 0 because we use 32-bit alpha)
  for (let i = 0; i < andSize; i++) {
    buf[p++] = 0;
  }

  return buf;
}

const curBuffer = createCurFile(W, H, rgba, 6, 4);
const curPath = path.join(__dirname, '../public/creative-orbit-cursor.cur');
fs.writeFileSync(curPath, curBuffer);
console.log('Successfully generated Windows .cur file at:', curPath);
