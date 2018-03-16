import React from 'react';
import $ from 'jquery';

import store from '../../redux/store';

const style = {
  // background: '#ffcc00',
  // padding: '50px 50px 50px 50px',
  margin: '20px 20px 20px 20px',
};

const changeHandler = (e) => {
  // console.log(e.target.value);
  store.dispatch({
    type: 'changetext',
    body: {
      text: e.target.value,
    },
  });
};

const Textarea = () => (
  <textarea
    className="col form-control"
    id="lyrics"
    style={style}
    onChange={changeHandler}
    placeholder="Lyrics..."
    cols="30"
    rows="5"
  />
);

export default Textarea;
