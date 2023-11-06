import * as React from 'react';



export function Suggestion({username, jobTitle, img}) {
  return (
    <>
      <div className={'flex flex-col space-y-2 mt-4 ml-1'}>
        <div className={'flex items-center justify-between'}>
          <img
            src={img}
            alt={'profile'}
            className={'rounded-full h-10 w-10 border p-[2px]'}
          />
          <div className={'flex-1 ml-4'}>
            <h2 className={'font-semibold text-sm'}>{username}</h2>
            <h3 className={'text-xs text-gray-400'}>{jobTitle}</h3>
          </div>
          <button className={'text-blue-400 text-xs font-semibold'}>Follow</button>
        </div>

      </div>
    </>
  );
}