import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";


export default function Post({id, username, userImg, img, caption}) {
  return (
    <>
    <div className={'bg-white my-7 border '}>
      <div className={'flex items-center p-5'}>
        <img
          src={userImg}
          alt={username}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className={'flex-1 w-12  font-bold cursor-pointer hover:underline'}>{username}</p>
        <DotsHorizontalIcon className={'h-5 cursor-pointer'}/>
      </div>
        <img
          src={img}
          alt={username}
          className="object-cover w-full h-96"
        />
        <div>
          <p className='text-xs w-14 truncate'>{username}</p>
          <p className='text-xs w-14 truncate'>{caption}</p>
        </div>
      </div>
    </>
  )
}
