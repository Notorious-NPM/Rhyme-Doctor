import React from 'react';
import './comment.css';

const Comments = (props) => {
  return (
    <div className="comments">

      <div className="page-header">
        <h1 className="comments-title">Comments</h1>
      </div>

      {props.comments.map((comment, index) => (
        <div className="comments-list">
          <div className="media">
            {/* <a className="media-left" href="#">
              <img src="http://lorempixel.com/40/40/people/1/" />
            </a> */}
            <div className="media-body">

              <h4 className="media-heading user_name">{comment.name}</h4>
              {comment.text}
              <p><small><a href="#">Like</a></small></p>
            </div>
          </div>
        </div>))}


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
