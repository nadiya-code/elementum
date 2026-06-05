import React from 'react';

function CircleGlow({ size = 300, className = '' }) {
  return (
    <div 
      className={`absolute rounded-full bg-[hsl(var(--elementum-pink))] opacity-40 blur-[60px] pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}

export default CircleGlow;