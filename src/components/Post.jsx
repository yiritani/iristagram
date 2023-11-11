import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/solid";
import {BookmarkIcon, ChatIcon, EmojiHappyIcon, HeartIcon} from "@heroicons/react/outline";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid";
import {useSession} from "next-auth/react";
import {addDoc, setDoc, deleteDoc, query, orderBy, collection, doc, serverTimestamp, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "@/lib/firebase";
import Moment from "react-moment";

export default function Post({id, username, userImg, img, caption}) {
  const {data: session} = useSession()
  const [comment, setComment] = React.useState('')
  const [comments, setComments] = React.useState([])
  const [likes, setLikes] = React.useState([])
  const [alreadyLiked, setAlreadyLiked] = React.useState(false)

  const addComment = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
    setComment('');
  }

  const sendLike = async () => {
    if(likes.includes(session.user.uid)){
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.uid))
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.uid), {
        username: session.user.username,
      })
    }
  }

  React.useEffect(() => {
    console.log('useEffect aaa')
    return onSnapshot(
      query(collection(db, 'posts', id, 'comments'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setComments(snapshot.docs);
      },
    );
  }, [db, id])

  React.useEffect(() => {
    console.log('useEffect')
    return onSnapshot(
      query(collection(db, 'posts', id, 'likes')),
      (snapshot) => {
        setLikes(snapshot.docs);
        if (snapshot.docs.map(doc => doc.id).includes(session?.user?.uid)) {
          setAlreadyLiked(true)
        }
      },
    );
  },[])


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
          {likes.length > 0 && (
            <>
              <p className={'font-bold'}>{likes.length} likes</p>
            </>
          )}
          {alreadyLiked ? (
            <HeartIconFilled onClick={sendLike} className={'btn text-red-500'}/>
          ) : (
            <HeartIcon onClick={sendLike} className={'btn'}/>
          )}
          <ChatIcon className={'btn'}/>
        </div>
        <BookmarkIcon className={'btn'}/>
      </div>

      <div className={'flex px-4 pt-4'}>
        <p className={'font-bold mr-1'}>{username}</p>
        <p className={'truncate'}>{caption}</p>
      </div>
      {comments.length > 0 && (
        <div className={'my-2 ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'}>
          {comments.map((comment) => {
            const commentData = comment.data();
            return (
              <div key={comment.id} className={'flex items-center space-x-2 mb-3'}>
                <img
                  src={commentData.userImage}
                  alt={`Profile of ${commentData.username}`}
                  className="rounded-full h-7 w-7 object-cover p-1 mr-3"
                />
                <p className={'flex-1 w-5 font-semibold cursor-pointer hover:underline'}>
                  {commentData.username}
                </p>
                <p className={'flex-1 truncate'}>
                  {commentData.comment}
                </p>
                <Moment fromNow className={'pr-5 text-sm text-gray-500'}>{commentData.timestamp?.toDate()}</Moment>
              </div>
            );
          })}
        </div>
      )}

      <div className={'px-4 pb-4'}>
        <p className={'text-blue-500 cursor-pointer hover:underline'}>View all comments</p>
        <p className={'text-gray-500 cursor-pointer'}>3 days ago</p>
      </div>

      {session && (
        <form action={'#'} className={'flex items-center p-4'}>
          <EmojiHappyIcon className={'h-7'}/>
          <input
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            type={'text'} placeholder={'Add a comment...'} className={'border-none flex-1 focus:ring-0 outline-none'}/>
          <button type={'submit'} onClick={addComment} disabled={!comment.trim()} className={'font-semibold text-blue-400 disabled:text-blue-200'}>Post</button>
        </form>
      )}
    </div>
    </>
  )
}
