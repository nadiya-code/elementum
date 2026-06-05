import React from 'react';

function AvatarGrid() {
  const avatars = [
    // Normalized top offsets (Figma Canvas top coordinate minus the section start index of 801px)
    { id: 1, url: 'img21.jpeg', topClass: 'xl:top-[195px]', leftClass: 'xl:left-[38px]' },
    { id: 2, url: 'img20.jpeg', topClass: 'xl:top-[139px]', leftClass: 'xl:left-[199px]', isSpecialBorder: true }, // Ellipse 261 (8px border)
    { id: 3, url: 'img19.jpeg', topClass: 'xl:top-[0px]',   leftClass: 'xl:left-[553px]' },
    { id: 4, url: 'img22.jpeg', topClass: 'xl:top-[226px]', leftClass: 'xl:left-[677px]' },
    { id: 5, url: 'img23.jpeg', topClass: 'xl:top-[55px]',  leftClass: 'xl:left-[977px]' },
    { id: 6, url: 'img7.jpeg',  topClass: 'xl:top-[139px]', leftClass: 'xl:left-[1144px]', isSpecialBorder: true }, // Ellipse 258 (8px border)
  { id: 7, url: 'img24.jpeg',  topClass: 'xl:top-[0px]', leftClass: 'xl:left-[1414px]', isSpecialBorder: true }, // Ellipse 258 (8px border)
  { id: 8, url: 'img9.jpeg',  topClass: 'xl:top-[159px]', leftClass: 'xl:left-[1656px]', isSpecialBorder: true },
  ];

  return (
    /* We build a relative coordinate container frame on desktop (1844px wide x 453px high) */
    <div className="w-full overflow-x-auto xl:overflow-visible flex justify-center pt-8">
      
      {/* DESKTOP ABSTRACT VIEWPORT SCREEN PATHWAYS */}
      <div 
        className="relative shrink-0 hidden xl:block"
        style={{ width: '1900px', height: '453px' }}
      >
        {avatars.map((avatar, index) => (
          <div 
            key={avatar.id}
            className={`absolute ${avatar.topClass} ${avatar.leftClass} w-[226px] h-[226px] rounded-full overflow-hidden shadow-lg hover:scale-110 hover:z-30 transition-transform duration-300 bg-neutral-100 ${
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

      {/* MOBILE BREAKPOINT LOGIC - Displays a clean fluid row layout so it doesn't break overflow boundaries */}
     {/* MOBILE - SAME DESIGN SCALED */}
<div className="xl:hidden w-full overflow-x-auto">
  <div className="flex justify-center">
    <div
      className="relative origin-top-left scale-[0.22] sm:scale-[0.35] md:scale-[0.55]"
      style={{
        width: '1844px',
        height: '453px',
      }}
    >
      {avatars.map((avatar, index) => (
        <div
          key={`${avatar.id}-${index}`}
          className={`absolute
            ${avatar.topClass.replace('xl:', '')}
            ${avatar.leftClass.replace('xl:', '')}
            w-[226px] h-[226px]
            rounded-full overflow-hidden shadow-lg bg-neutral-100
            ${
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
</div>
    </div>
  );
}

export default AvatarGrid;