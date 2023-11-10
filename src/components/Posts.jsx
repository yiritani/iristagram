import React, {useEffect} from 'react';
import Post from "@/components/Post";
import {query, orderBy, collection, onSnapshot} from "firebase/firestore";
import {db} from "@/lib/firebase";
import {useSession} from "next-auth/react";

export default function Posts() {
  const [posts, setPosts] = React.useState([])
  const {data: session} = useSession()
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);

  return (
    <>
      <div>
        {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              username={post.data().username}
              userImg={post.data().profileImg}
              img={post.data().image}
              caption={post.data().caption}
            />
        ))}
      </div>
    </>
  )
}
