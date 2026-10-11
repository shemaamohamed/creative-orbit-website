export interface OrbitMarkProps {
  className?: string;
}

/**
 * Orbit Geometric Insignia component representing the orbital rings
 * and connection nodes of Creative Orbit.
 */
export default function OrbitMark({className = ''}: OrbitMarkProps) {
  return (
    <span aria-hidden="true" className={`orbit-mark ${className}`}>
      <span className="orbit-ring-outer" />
      <span className="orbit-ring-inner" />
      <i className="orbit-dot dot-1" />
      <b className="orbit-dot dot-2" />
      <em className="orbit-dot dot-3" />
    </span>
  );
}

export {OrbitMark};
