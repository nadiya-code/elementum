import React from 'react';

function FloatingAvatar({ src, alt, size = 'md', className = '' }) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-[226px] h-[226px]',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };
  
  return (
    <div 
      className={`${sizeClasses[size]} border-4 border-[var(--elementum-purple)] overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ border: '8px'}}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default FloatingAvatar;