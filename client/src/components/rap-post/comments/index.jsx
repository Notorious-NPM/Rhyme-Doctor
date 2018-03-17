import React from 'react';

const Comments = (props) => {
  return (
    <div>
      {props.comments.map((comment, index) => <li key={index}>{comment.name}: {comment.text}</li>)}
      <div>
        <input value={props.myComment} onChange={(e) => props.createComment(e)} />
        <button onClick={() => props.postComment()}>Submit</button>
      </div>
    </div>
  );
};

export default Comments;
