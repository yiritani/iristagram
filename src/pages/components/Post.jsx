import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";
import {HeartIcon, ChatIcon, BookmarkIcon} from "@heroicons/react/outline";


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

        {/*create buttons like comment */}
      <div className={'flex justify-between px-4 pt-4'}>
        <div className={'flex space-x-4'}>
          <HeartIcon className={'btn'}/>
          <ChatIcon className={'btn'}/>
        </div>
        <BookmarkIcon className={'btn'}/>
      </div>


        {/*<div>*/}
        {/*  <p className='text-xs w-14 truncate'>{username}</p>*/}
        {/*  <p className='text-xs w-14 truncate'>{caption}</p>*/}
        {/*</div>*/}
      </div>
    </>
  )
}
