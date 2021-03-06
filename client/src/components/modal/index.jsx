import React from 'react';
import Comments from '../rap-post/comments';
import { Link } from 'react-router-dom';
import './modal.css';

const Modal = (props) => {
  return (
    // <!-- Modal -->
    <div className={props.hidden ? 'modal fade' : 'modal fade show'} id="modalLong" tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden={props.hidden} style={props.hidden ? { display: 'none' } : { display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="row modal-row">
            <div className="col-7 modal-col">
              <div className="modal-header">
                <img src={props.image} alt="ProfilePicThumb" className="img-thumb" />
                <h5 className="modal-title name" id="modalLongTitle">
                  <Link to={{ pathname: '/profile', state: { username: props.name }}}>{props.name}</Link> {/* eslint-disable-line */}
                </h5>
              </div>
              <div className="modal-body rap-text">
                {props.rapText}
              </div>
            </div>
            <div className="col-5 comments-col">
              <div className="modal-header">
                <h5 className="modal-title" id="modalLongTitle">Comments</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true" onClick={() => props.triggerModal()}>&times;</span>
                </button>
              </div>
              <div className="row modal-row comments-row">

                <Comments
                  postComment={props.postComment}
                  createComment={props.createComment}
                  myComment={props.myComment}
                  comments={props.comments}
                  username={props.username}
                />
              </div>
              <div className="row modal-row">
                <div className="form-container special-container">
                  <div className="form-group">
                    <textarea value={props.myComment} onChange={(e) => props.createComment(e)} className="form-control special-control" rows="3" id="comment" placeholder="Add a comment..." />
                    <button className="btn btn-primary btn-margin" onClick={() => props.postComment()}>Submit</button>
                    <button type="button" className="btn btn-secondary btn-margin" data-dismiss="modal" onClick={() => props.triggerModal()}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
