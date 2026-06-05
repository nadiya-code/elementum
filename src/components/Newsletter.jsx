import React from 'react';
import BlobAccent from './BlobAccent.jsx';

function Newsletter() {
  return (
    <section className="relative bg-mint-light py-[60px] md:py-[80px] px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Purple blob accent positioned at top-right corner */}
      <BlobAccent className="absolute -top-16 -right-16 text-[hsl(var(--elementum-purple))] w-64 h-64 opacity-80 hidden md:block pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-foreground mb-4">
          Subscribe to our newsletter
        </h2>
        
        <p className="text-[16px] md:text-[18px] text-gray-600 mb-8">
          To make your stay special and even more memorable
        </p>
        
        <button className="bg-[hsl(var(--elementum-black))] text-white rounded-full px-10 py-4 font-semibold text-lg hover:scale-105 hover:bg-[hsl(var(--elementum-black))/90] transition-all duration-300 active:scale-95">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}

export default Newsletter;