import React from 'react';

function AvatarGrid() {
  const avatars = [
    // Normalized top offsets (Figma Canvas top coordinate minus the section start index of 801px)
    { id: 1, url: 'img21.jpeg', topClass: 'absolute top-[195px]', leftClass: 'left-[38px]', isSpecialBorder: false },
    { id: 2, url: 'img20.jpeg', topClass: 'absolute top-[139px]', leftClass: 'left-[199px]', isSpecialBorder: true }, // Ellipse 261 (8px border)
    { id: 3, url: 'img19.jpeg', topClass: 'absolute top-[0px]',   leftClass: 'left-[553px]', isSpecialBorder: false },
    { id: 4, url: 'img22.jpeg', topClass: 'absolute top-[226px]', leftClass: 'left-[677px]', isSpecialBorder: false },
    { id: 5, url: 'img23.jpeg', topClass: 'absolute top-[55px]',  leftClass: 'left-[977px]', isSpecialBorder: false },
    { id: 6, url: 'img7.jpeg',  topClass: 'absolute top-[139px]', leftClass: 'left-[1144px]', isSpecialBorder: true }, // Ellipse 258 (8px border)
    { id: 7, url: 'img24.jpeg', topClass: 'absolute top-[0px]',   leftClass: 'left-[1414px]', isSpecialBorder: false }, 
    { id: 8, url: 'img9.jpeg',  topClass: 'absolute top-[159px]', leftClass: 'left-[1656px]', isSpecialBorder: false }, // Fixed duplicate key
  ];

  return (
    /* 1. We wrap the grid in an outer container that reserves exactly the calculated height 
         produced by the scaling factor to prevent overlapping with content below it.
      2. overflow-visible ensures the avatar margins don't clip when scaled.
    */
    <div className="w-full flex justify-center items-center overflow-visible h-[240px] sm:h-[320px] md:h-[380px] xl:h-[453px] mt-8">
      
      {/* SCALE FACTOR CONTROL LAYER:
        - scale-[0.45] on extra small mobile screens
        - scale-[0.65] on mobile/tablets
        - scale-[0.85] on small laptops
        - scale-100 on desktop viewports
        - origin-top maps coordinates seamlessly without adding weird layout gaps
      */}
      <div 
        className="relative shrink-0 select-none pointer-events-auto origin-top scale-[0.45] sm:scale-[0.65] md:scale-[0.80] lg:scale-[0.88] xl:scale-100 transition-transform duration-300"
        style={{ width: '1844px', height: '453px' }}
      >
        {avatars.map((avatar, index) => (
          <div 
            key={avatar.id}
            className={`absolute ${avatar.topClass} ${avatar.leftClass} w-[226px] h-[226px] rounded-full overflow-hidden shadow-lg hover:scale-110 hover:z-50 transition-transform duration-300 bg-neutral-100 ${
              avatar.isSpecialBorder 
                ? 'border-[8px] border-white shadow-xl' 
                : 'border-4 border-white'
            }`}
            style={{ zIndex: 10 - index }}
          >
            <img 
              src={avatar.url} 
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default AvatarGrid;