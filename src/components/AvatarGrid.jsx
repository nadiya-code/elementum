import React from 'react';

function AvatarGrid() {
  const avatars = [
    { id: 1, url: 'img21.jpeg', topClass: 'xl:top-[195px]', leftClass: 'xl:left-[38px]' },
    { id: 2, url: 'img20.jpeg', topClass: 'xl:top-[139px]', leftClass: 'xl:left-[199px]', isSpecialBorder: true },
    { id: 3, url: 'img19.jpeg', topClass: 'xl:top-[0px]', leftClass: 'xl:left-[553px]' },
    { id: 4, url: 'img22.jpeg', topClass: 'xl:top-[226px]', leftClass: 'xl:left-[677px]' },
    { id: 5, url: 'img23.jpeg', topClass: 'xl:top-[55px]', leftClass: 'xl:left-[977px]' },
    { id: 6, url: 'img7.jpeg', topClass: 'xl:top-[139px]', leftClass: 'xl:left-[1144px]', isSpecialBorder: true },
    { id: 7, url: 'img24.jpeg', topClass: 'xl:top-[0px]', leftClass: 'xl:left-[1414px]', isSpecialBorder: true },
    { id: 8, url: 'img9.jpeg', topClass: 'xl:top-[159px]', leftClass: 'xl:left-[1656px]', isSpecialBorder: true },
  ];

  return (
    <div className="w-full flex justify-center py-8 overflow-hidden">
      
      {/* DESKTOP / LAPTOP VIEW - EXACT SAME AS YOUR CURRENT DESIGN */}
      <div
        className="relative hidden xl:block shrink-0"
        style={{ width: '1900px', height: '453px' }}
      >
        {avatars.map((avatar, index) => (
          <div
            key={avatar.id}
            className={`absolute ${avatar.topClass} ${avatar.leftClass}
              w-[226px] h-[226px]
              rounded-full overflow-hidden
              bg-neutral-100
              transition-all duration-300
              hover:scale-110 hover:z-30
              ${
                avatar.isSpecialBorder
                  ? 'border-[8px] border-white shadow-xl'
                  : 'border-4 border-white shadow-lg'
              }
            `}
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

      {/* MOBILE / TABLET VIEW - SAME DESIGN SCALED DOWN */}
      <div className="xl:hidden w-full overflow-x-auto">
        <div
          className="
            relative
            origin-top-left
            scale-[0.20]
            sm:scale-[0.30]
            md:scale-[0.42]
          "
          style={{
            width: '1900px',
            height: '453px',
            marginBottom: '-250px',
          }}
        >
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`absolute
                ${
                  avatar.topClass
                    .replace('xl:top-', 'top-')
                }
                ${
                  avatar.leftClass
                    .replace('xl:left-', 'left-')
                }
                w-[226px] h-[226px]
                rounded-full overflow-hidden
                bg-neutral-100
                ${
                  avatar.isSpecialBorder
                    ? 'border-[8px] border-white shadow-xl'
                    : 'border-4 border-white shadow-lg'
                }
              `}
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
  );
}

export default AvatarGrid;