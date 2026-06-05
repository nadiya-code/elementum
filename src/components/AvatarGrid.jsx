import React from 'react';

function AvatarGrid() {
  const avatars = [
    { id: 1, url: 'img21.jpeg', topClass: 'xl:top-[195px]', leftClass: 'xl:left-[38px]', isSpecialBorder: false },
    { id: 2, url: 'img20.jpeg', topClass: 'xl:top-[139px]', leftClass: 'xl:left-[199px]', isSpecialBorder: true }, 
    { id: 3, url: 'img19.jpeg', topClass: 'xl:top-[0px]',   leftClass: 'xl:left-[553px]', isSpecialBorder: false },
    { id: 4, url: 'img22.jpeg', topClass: 'xl:top-[226px]', leftClass: 'xl:left-[677px]', isSpecialBorder: false },
    { id: 5, url: 'img23.jpeg', topClass: 'xl:top-[55px]',  leftClass: 'xl:left-[977px]', isSpecialBorder: false },
    { id: 6, url: 'img7.jpeg',  topClass: 'xl:top-[139px]', leftClass: 'xl:left-[1144px]', isSpecialBorder: true }, 
    { id: 7, url: 'img24.jpeg', topClass: 'xl:top-[0px]',   leftClass: 'xl:left-[1414px]', isSpecialBorder: false },
    { id: 8, url: 'img9.jpeg',  topClass: 'xl:top-[159px]', leftClass: 'xl:left-[1656px]', isSpecialBorder: false }
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 pt-8 pb-4 overflow-visible">
      
      {/* 1. MOBILE & TABLET LAYOUT (Below 1280px screen width) 
          Switches to a fluid, overlapping row that gracefully wraps if the screen is tiny.
          No images will ever be clipped off the screen!
      */}
      <div className="flex flex-wrap justify-center items-center -space-x-6 gap-y-6 max-w-full xl:hidden">
        {avatars.map((avatar, index) => (
          <div 
            key={avatar.id}
            className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md hover:scale-110 hover:z-30 transition-transform duration-300 bg-neutral-100 ${
              avatar.isSpecialBorder 
                ? 'border-4 sm:border-[6px] border-white shadow-lg' 
                : 'border-2 sm:border-4 border-white'
            }`}
            style={{ zIndex: 10 - index }}
          >
            <img 
              src={avatar.url} 
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* 2. DESKTOP LAYOUT (1280px screen width and above)
          Instantly falls back to your exact, pixel-perfect Figma layout specifications.
      */}
      <div 
        className="hidden xl:block relative shrink-0 w-[1844px] h-[453px] overflow-visible"
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