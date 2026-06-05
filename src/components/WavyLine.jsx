import React from 'react';

function WavyLine({ className = '', vertical = false }) {
  // If the vertical variant is true (like on the left margin of the hero section), 
  // we rotate the graphic 90 degrees to fit the layout guidelines
  if (vertical) {
    return (
      <div 
        className={`inline-block pointer-events-none select-none overflow-hidden ${className}`}
        style={{ width: '40px', height: '200px' }}
      >
        <img 
          src="img2.jpeg" 
          alt="Vertical accent line marker" 
          className="w-full h-full object-cover transform rotate-90 scale-y-125"
        />
      </div>
    );
  }
  
  // Default Horizontal Line (Used seamlessly as the underline accent token beneath text elements)
  return (
    <div 
      className={`inline-block pointer-events-none select-none overflow-hidden ${className}`}
      style={{ width: '200px', height: '40px' }}
    >
      <img 
        src="img2.jpeg" 
        alt="Horizontal accent line marker" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
export default WavyLine;