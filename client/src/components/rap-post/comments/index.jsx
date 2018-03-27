import React from 'react';
import './comment.css';

const Comments = (props) => {
  return (
    <div className="comments">
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

    </div>
  );
};

export default Comments;
