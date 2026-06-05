import React from 'react';

function GeometricAccent({ shape = 'circle', size = 'md', color = 'coral', className = '' }) {
  const sizeMap = {
    sm: 40,
    md: 80,
    lg: 120,
    xl: 160,
  };
  
  const colorMap = {
    coral: 'var(--elementum-coral)',
    purple: 'var(--elementum-purple)',
    mint: 'var(--elementum-mint)',
    pink: 'var(--elementum-pink)',
  };
  
  const dimension = sizeMap[size];
  const bgColor = colorMap[color];
  
  if (shape === 'circle') {
    return (
      <div 
        className={`geometric-circle ${className}`}
        style={{
          width: `${dimension}px`,
          height: `${dimension}px`,
          backgroundColor: bgColor,
        }}
      />
    );
  }
  
  if (shape === 'triangle') {
    return (
      <div 
        className={`geometric-triangle ${className}`}
        style={{
          borderLeft: `${dimension / 2}px solid transparent`,
          borderRight: `${dimension / 2}px solid transparent`,
          borderBottom: `${dimension}px solid ${bgColor}`,
        }}
      />
    );
  }
  
  if (shape === 'rectangle') {
    return (
      <div 
        className={className}
        style={{
          width: `${dimension}px`,
          height: `${dimension * 0.6}px`,
          backgroundColor: bgColor,
        }}
      />
    );
  }
  
  if (shape === 'half-circle') {
    return (
      <div 
        className={className}
        style={{
          width: `${dimension}px`,
          height: `${dimension / 2}px`,
          backgroundColor: bgColor,
          borderRadius: `${dimension}px ${dimension}px 0 0`,
        }}
      />
    );
  }
  
  return null;
}
export default GeometricAccent;