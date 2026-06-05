import React from 'react';

function AvatarGrid() {
  const avatars = [
    // Your laptop positioning metrics remain completely untouched:
    { id: 1, url: 'img21.jpeg', topClass: 'xl:top-[195px]', leftClass: 'xl:left-[38px]', isSpecialBorder: false },
    { id: 2, url: 'img20.jpeg', topClass: 'xl:top-[139px]', leftClass: 'xl:left-[199px]', isSpecialBorder: true }, 
    { id: 3, url: 'img19.jpeg', topClass: 'xl:top-[0px]',   leftClass: 'xl:left-[553px]', isSpecialBorder: false },
    { id: 4, url: 'img22.jpeg', topClass: 'xl:top-[226px]', leftClass: 'xl:left-[677px]', isSpecialBorder: false },
    { id: 5, url: 'img23.jpeg', topClass: 'xl:top-[55px]',  leftClass: 'xl:left-[977px]', isSpecialBorder: false },
    { id: 6, url: 'img7.jpeg',  topClass: 'xl:top-[139px]', leftClass: 'xl:left-[1144px]', isSpecialBorder: true }, 
    { id: 7, url: 'img24.jpeg', topClass: 'xl:top-[0px]',   leftClass: 'xl:left-[1414px]', isSpecialBorder: false }, 
    { id: 8, url: 'img9.jpeg',  topClass: 'xl:top-[159px]', leftClass: 'xl:left-[1656px]', isSpecialBorder: false }, 
  ];

  return (
    /* 1. We use a CSS variable to calculate the exact scaling multiplier: (Screen Width / 1844px Canvas)
      2. The container height calculation updates dynamically to prevent gaps or overlapping elements.
    */
    <div 
      className="w-full flex justify-center items-center overflow-visible my-12"
      style={{
        '--grid-scale': 'max(0.22, min(1, calc(92vw / 1844)))',
        height: 'calc(453px * var(--grid-scale))'
      }}
    >
      {/* ZOOM CANVAS:
        Uses the exact scale multiplier computed above. 
        This keeps all layout elements relative, perfectly grouped, and completely visible on phone displays.
      */}
      <div 
        className="relative shrink-0 select-none pointer-events-auto origin-center transition-transform duration-150"
        style={{ 
          width: '1844px', 
          height: '453px',
          transform: 'scale(var(--grid-scale))'
        }}
      >
        {avatars.map((avatar, index) => (
          <div 
            key={avatar.id}
            className={`absolute ${avatar.topClass} ${avatar.leftClass} w-[226px] h-[226px] rounded-full overflow-hidden shadow-lg hover:scale-105 hover:z-50 transition-transform duration-300 bg-neutral-100 ${
              avatar.isSpecialBorder 
                ? 'border-[8px] border-white shadow-xl' 
                : 'border-4 border-white'
            }`}
            style={{ zIndex: 10 - index }}
          >
            <img 
              src={avatar.url} 
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default AvatarGrid;