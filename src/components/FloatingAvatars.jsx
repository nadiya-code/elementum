import React from 'react';

function FloatingAvatars() {
  const avatars = [
    // LEFT SIDE
    { id: 1, url: 'img13.jpeg', size: 'w-[100px] h-[100px]', pos: 'top-[-80px] -left-[220px]' },
    { id: 2, url: 'img11.jpeg', size: 'w-[60px] h-[60px]',   pos: 'top-[60px] -left-[270px]' },
    { id: 3, url: 'img12.jpeg', size: 'w-[140px] h-[140px]', pos: 'top-[120px] -left-[200px]' },
    { id: 4, url: 'img10.jpeg', size: 'w-[75px] h-[75px]',   pos: 'top-[290px] -left-[230px]' },

    // RIGHT SIDE
    { id: 5, url: 'img8.jpeg',  size: 'w-[90px] h-[90px]',   pos: 'top-[-80px] -right-[200px]' },
    { id: 6, url: 'img9.jpeg',  size: 'w-[110px] h-[110px]', pos: 'top-[-80px] -right-[90px]' },
    { id: 7, url: 'img7.jpeg',  size: 'w-[80px] h-[80px]',   pos: 'top-[80px] -right-[100px]' },
    { id: 8, url: 'img6.jpeg',  size: 'w-[160px] h-[160px]', pos: 'top-[180px] -right-[200px]' },
  ];

  return (
    <div className="hidden md:block absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
      {avatars.map((avatar) => (
        <div
          key={avatar.id}
          className={`absolute ${avatar.pos} ${avatar.size} rounded-full border-4 border-[hsl(var(--elementum-purple))] overflow-hidden shadow-lg`}
        >
          <img
            src={avatar.url}
            alt="Client avatar"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default FloatingAvatars;