import React from 'react';

function PillHighlight({ children, color = 'mint', className = '' }) {
  const colorMap = {
    mint: 'bg-[hsl(var(--elementum-mint))]',
    pink: 'bg-[hsl(var(--elementum-pink))]',
  };
  
  return (
    <span className={`inline-block px-4 py-1 mx-1 rounded-full text-foreground ${colorMap[color]} ${className}`}>
      {children}
    </span>
  );
}
export default PillHighlight;