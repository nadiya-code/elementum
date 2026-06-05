import React from 'react';
import { ArrowRight } from 'lucide-react';

function ServiceRow({ leftText, centerText, badge = null, isLast = false }) {
  return (
    <div className={`group grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] items-center py-8 gap-6 ${!isLast ? 'border-b border-gray-200' : ''}`}>
      {/* Left Column */}
      <div className="text-muted-foreground text-base md:text-lg pr-4">
        {leftText}
      </div>
      
      {/* Center Column */}
      <div className="text-2xl md:text-3xl font-bold transition-colors group-hover:text-[hsl(var(--elementum-purple))]">
        {centerText}
      </div>
      
      {/* Right Column */}
      <div className="relative flex justify-end items-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 group-hover:bg-[hsl(var(--elementum-purple))] group-hover:text-white transition-all duration-300">
          <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
        </div>
        {badge && (
          <span className="absolute -top-3 -right-3 text-2xl animate-bounce pointer-events-none select-none">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}
export default ServiceRow;