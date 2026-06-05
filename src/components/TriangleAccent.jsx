import React from 'react';

function TriangleAccent({ size = 100, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[hsl(var(--elementum-coral))] ${className}`}
    >
      <path d="M50 0L100 100H0L50 0Z" fill="currentColor"/>
    </svg>
  );
}
export default TriangleAccent;