import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";
import {HeartIcon, ChatIcon, BookmarkIcon, EmojiHappyIcon} from "@heroicons/react/outline";


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

      <div className={'flex justify-between px-4 pt-4'}>
        <div className={'flex space-x-4'}>
          <HeartIcon className={'btn'}/>
          <ChatIcon className={'btn'}/>
        </div>
        <BookmarkIcon className={'btn'}/>
      </div>

      <div className={'flex px-4 pt-4'}>
        <p className={'font-bold mr-1'}>{username}</p>
        <p className={'truncate'}>{caption}</p>
      </div>

      <div className={'px-4 pb-4'}>
        <p className={'text-blue-500 cursor-pointer hover:underline'}>View all comments</p>
        <p className={'text-gray-500 cursor-pointer'}>3 days ago</p>
      </div>

      <form action={'#'} className={'flex items-center p-4'}>
        <EmojiHappyIcon className={'h-7'}/>
        <input type={'text'} placeholder={'Add a comment...'} className={'border-none flex-1 focus:ring-0 outline-none'}/>
        <button className={'font-semibold text-blue-400'}>Post</button>
      </form>
    </div>
    </>
  )
}
