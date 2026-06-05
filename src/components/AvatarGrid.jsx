import React from 'react';

function AvatarGrid() {
  const avatars = [
    // Your exact laptop position coordinates remain completely untouched:
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
    <div className="w-full flex justify-center items-center overflow-visible my-8 h-[180px] sm:h-[260px] lg:h-[350px] xl:h-[453px]">
      
      {/* ZOOM CANVAS LAYER:
        - On mobile and small screens, it scales down smoothly using percentages.
        - On standard laptops, it scales to `scale-[0.80]` or `scale-[0.88]` so everything fits.
        - On large desktops, it hits full `scale-100`.
        - `origin-center` zooms out cleanly without shifts.
      */}
      <div 
        className="relative shrink-0 select-none pointer-events-auto origin-center scale-[0.20] xs:scale-[0.26] sm:scale-[0.38] md:scale-[0.52] lg:scale-[0.70] lgl:scale-[0.82] xl:scale-100 transition-transform duration-200"
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