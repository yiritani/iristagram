import React from 'react';
import 'minifaker/locales/en'

export default function Story({username, img}) {

  return (
    <>
      <img src={img} alt={username} />
      <p>{username}</p>

    </>
  );
}