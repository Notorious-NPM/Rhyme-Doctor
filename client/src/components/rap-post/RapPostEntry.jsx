import React from 'react';

const RapPostEntry = (props) => {
  return (
    <div>
      <p>{props.rapPost.text}</p>
      <br />
      <p>By {props.rapPost.user.name} | Likes: {props.rapPost.like_count}</p>
    </div>
  );
};

export default RapPostEntry;
