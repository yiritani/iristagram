import React, {useEffect, useState} from 'react';
import 'minifaker/locales/en'
import minifaker from 'minifaker';
import Story from "@/pages/components/Story";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => (
      {
        username: minifaker.username({locale: 'en'}),
        img: `https://i.pravatar.cc/150?img=${i+1}`,
        id: i
      }
    ))
    setStoryUsers(storyUsers);
  }, []);



  return (
    <>
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </>
  );
}