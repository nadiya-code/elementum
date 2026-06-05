import React from 'react';

function BlobAccent({ className = '' }) {
  return (
    <svg 
      className={`text-[hsl(var(--elementum-purple))] ${className}`} 
      width="200" 
      height="100" 
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100H0Z" fill="currentColor"/>
    </svg>
  );
}

export default BlobAccent;