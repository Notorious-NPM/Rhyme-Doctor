import React from 'react';
import './modal.css';

const Modal = (props) => {
  return (    
    // <!-- Modal -->
    <div className={props.hidden ? 'modal fade' : 'modal fade show'} id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden={props.hidden} style={props.hidden ? { display: 'none' } : { display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">By {props.name}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" onClick={() => props.triggerModal()}>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.rapText}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.triggerModal()}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
