import React from 'react';
import 'minifaker/locales/en'

export default function Story({username, img}) {

  return (
    <>
      <div>
          <img
            src={img}
            alt={username}
            className="rounded-full h-14 w-14 rounded-full flex items-center justify-center border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 p-[1.5px] ease-out"
          />
          <p className='text-xs w-14 truncate'>{username}</p>
        </div>
    </>
  );
}