const sharp = require('sharp');
const fs = require('fs');

async function processImage(inputPath, outputPath, isFavicon = false) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels; // 4 because of ensureAlpha
  const output = Buffer.from(data);

  // Background thresholding with smooth edge anti-aliasing
  for (let i = 0; i < output.length; i += channels) {
    const r = output[i];
    const g = output[i + 1];
    const b = output[i + 2];

    // For assets-logo (white bg ~ 255)
    // For favicon (light grey ~ 247)
    const minColor = Math.min(r, g, b);
    const maxColor = Math.max(r, g, b);
    const colorDiff = maxColor - minColor; // saturation/chroma indicator

    if (isFavicon) {
      // Background around 245-255 with very low chroma (< 15)
      if (minColor > 235 && colorDiff < 15) {
        output[i + 3] = 0; // 100% transparent
      } else if (minColor > 215 && colorDiff < 20) {
        // smooth anti-aliasing edge
        const t = (minColor - 215) / (235 - 215);
        output[i + 3] = Math.round(255 * (1 - t));
      }
    } else {
      // White background: minColor > 240 with low chroma (< 20)
      if (minColor > 242 && colorDiff < 16) {
        output[i + 3] = 0; // transparent
      } else if (minColor > 220 && colorDiff < 25) {
        const t = (minColor - 220) / (242 - 220);
        output[i + 3] = Math.round(255 * (1 - t));
      }
    }
  }

  // Trim transparent pixels and save as PNG
  await sharp(output, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .trim()
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`Successfully generated ${outputPath}`);
}

async function run() {
  await processImage('public/assets-logo.jpeg', 'public/logo.png', false);
  await processImage('public/favicon.jpeg', 'public/favicon.png', true);
  // Also create a square icon version of favicon for head
  await sharp('public/favicon.png')
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/icon.png');
}

run().catch(console.error);
