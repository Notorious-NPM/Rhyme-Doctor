import React from 'react';

const Comments = (props) => {
  return (
    <div>
      {props.comments.map((comment, index) => <li key={index}>{comment.name}: {comment.text}</li>)}
      <div>
        <div className="form-group">
          <label for="comment">Comment:</label>
          <textarea value={props.myComment} onChange={(e) => props.createComment(e)} className="form-control" rows="5" id="comment" />
          <button className="btn btn-primary" onClick={() => props.postComment()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
