import React, {useEffect, useState} from 'react';
import 'minifaker/locales/en'
import minifaker from 'minifaker';
import Story from "@/components/Story";

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
      <div className={"flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-none"}>
        {storyUsers.map((user) => (
          <Story key={user.id} username={user.username} img={user.img} />
        ))}
      </div>
    </>
  );
}