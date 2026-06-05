import React from 'react';

function BrushUnderline({ children, className = '' }) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute -bottom-1 left-0 w-full h-[12px] z-0 text-[hsl(var(--elementum-golden))]"
        viewBox="0 0 100 12"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M0,8 C20,12 80,12 100,6 C80,10 20,10 0,4 Z" opacity="0.8" />
        <path d="M2,10 C25,12 75,12 98,8 C75,11 25,11 2,6 Z" opacity="0.6" />
      </svg>
    </span>
  );
}
export default BrushUnderline;