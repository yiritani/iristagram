import React from 'react';
import Stories from "@/pages/components/Stories";
import Posts from "@/pages/components/Posts";
import {MiniProfile} from "@/pages/components/MiniProfile";
import {Suggestions} from "@/pages/components/Suggestions";

export default function Feed() {
  return (
    <>
      <main className={'grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto md:max-w-6xl'}>
        <section className={'md:col-span-2'}>
          <Stories />
          <Posts />
        </section>

        <section className={'hidden md:inline-grid md:col-span-1'}>
          <div className={'fixed w-[380px]'}>
            <MiniProfile />
            <div className={'mt-4 ml-10 justify-between flex'}>
              <p className={'text-sm text-gray-400'}>Suggestions for you</p>
              <button className={'text-blue-400 text-sm font-semibold'}>See All</button>
            </div>
            <Suggestions />

          </div>
        </section>
      </main>

    </>
  );
}