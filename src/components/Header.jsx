import React from 'react'
import Image from 'next/image'
import {SearchIcon, PlusCircleIcon} from '@heroicons/react/outline'
import {HomeIcon} from "@heroicons/react/solid";
import {useSession, signIn, signOut} from "next-auth/react";

export default function Header() {
  const {data: session} = useSession()




  return (
    <>
      <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
        <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
          <div className='h-24 w-24 relative hidden lg:inline-grid cursor-pointer'>
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              className={"object-contain"}
              alt={"instagram icon"}
            />
          </div>
          <div className='h-24 w-10 relative lg:hidden cursor-pointer'>
            <Image
              src={"https://links.papareact.com/jjm"}
              layout="fill"
              className={"object-contain"}
              alt={"instagram camera icon"}
            />
          </div>

          <div className={"flex items-center relative"}>
            <input
              type="text"
              className={"bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"}
              placeholder={"Search"}
            />
            <SearchIcon className={"h-6 w-6 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"} />
          </div>

          <div className={"flex space-x-4 items-center"}>
            <HomeIcon className={"hidden lg:inline-flex h-6 w-6 text-gray-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"} />
            {session ? (
              <>
                <PlusCircleIcon className={"h-6 w-6 text-gray-500 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"} />
                <div className='h-10 w-10 relative cursor-pointer'>
                  <img
                    onClick={signOut}
                    src={session.user.image}
                    className={"object-contain rounded-full"}
                    alt={"instagram plus icon"}
                  />
                </div>
              </>
              ): (
                <button onClick={signIn} className={"text-blue-500 font-semibold text-sm"}>Sign in</button>
              )}
          </div>
        </div>
      </div>

    </>
  )
}
