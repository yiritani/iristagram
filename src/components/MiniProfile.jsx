import * as React from 'react';
import {useSession, signOut} from "next-auth/react";


export function MiniProfile() {
  const {data: session} = useSession()
  return (
    <div className={'flex items-center justify-between mt-14 ml-10'}>
      <img
        src={session?.user?.image}
        alt={'profile'}
        className={'rounded-full h-16 w-16 border p-[2px]'}
      />
      <div className={'flex-1 ml-4 items-center justify-between'}>
        <h2 className={'font-bold'}>{session?.user?.name}</h2>
        <h3 className={'text-sm text-gray-400'}>Welcome to Iristagram</h3>
      </div>
      <button onClick={signOut} className={'text-blue-400 text-sm font-semibold'}>Sign Out</button>
    </div>
  );
}