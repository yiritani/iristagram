import React from 'react';
import {PlusIcon} from "@heroicons/react/solid";
import 'minifaker/locales/en'

export default function Story({username, img, isUser}) {

  return (
    <>
      <div className={'relative group cursor-pointer'}>
          <img
            src={img}
            alt={username}
            className="rounded-full h-14 w-14 rounded-full flex items-center justify-center border-red-500 border-2 group hover:scale-90 transition-transform duration-200 p-[1.5px] ease-out"
          />
        {isUser && <PlusIcon className="absolute h-6 w-6 top-4 left-4 text-white" />}
          <p className='text-xs w-14 truncate'>{username}</p>
        </div>
    </>
  );
}