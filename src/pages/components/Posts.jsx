import React from 'react';
import Post from "@/pages/components/Post";


export default function Posts() {
  const posts = [
    {
      id: '1',
      username: 'daniel',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'Amazing nature photo is here.',
    },
    {
      id: '2',
      username: 'tonny',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'second post',
    },

  ]


  return (
    <>
      <div>
        {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.username}
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
            />
        ))}
      </div>




    </>
  )
}