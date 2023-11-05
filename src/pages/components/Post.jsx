import React from 'react';


export default function Post({id, username, userImg, img, caption}) {
  return (
    <>
      <div>
        <h1>{username}</h1>
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