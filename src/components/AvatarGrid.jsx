import React from 'react';

function AvatarGrid() {
  const avatars = [
    // Normalized top offsets (Figma Canvas top coordinate minus the section start index of 801px)
    { id: 1, url: 'img21.jpeg', topClass: 'top-[195px]', leftClass: 'left-[38px]', isSpecialBorder: false },
    { id: 2, url: 'img20.jpeg', topClass: 'top-[139px]', leftClass: 'left-[199px]', isSpecialBorder: true },  // Ellipse 261 (8px border)
    { id: 3, url: 'img19.jpeg', topClass: 'top-[0px]',   leftClass: 'left-[553px]', isSpecialBorder: false },
    { id: 4, url: 'img22.jpeg', topClass: 'top-[226px]', leftClass: 'left-[677px]', isSpecialBorder: false },
    { id: 5, url: 'img23.jpeg', topClass: 'top-[55px]',  leftClass: 'left-[977px]', isSpecialBorder: false },
    { id: 6, url: 'img7.jpeg',  topClass: 'top-[139px]', leftClass: 'left-[1144px]', isSpecialBorder: true }, // Ellipse 258 (8px border)
    { id: 7, url: 'img24.jpeg', topClass: 'top-[0px]',   leftClass: 'left-[1414px]', isSpecialBorder: false },
    { id: 8, url: 'img9.jpeg',  topClass: 'top-[159px]', leftClass: 'left-[1656px]', isSpecialBorder: false }
  ];

  return (
    /* Responsive viewport wrapper preventing x-axis window expansion layout breaking */
    <div className="w-full flex items-center justify-center overflow-visible py-4 min-h-[250px] sm:min-h-[350px] xl:min-h-[453px]">
      
      {/* PIXEL-PERFECT RESPONSTIVE CANVAS SCALE:
        Scales down smoothly for small viewports, ensuring mobile layout looks identical to desktop.
      */}
      <div 
        className="relative shrink-0 origin-center scale-[0.45] sm:scale-[0.6] md:scale-[0.75] lg:scale-[0.85] xl:scale-100 transition-transform duration-300"
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