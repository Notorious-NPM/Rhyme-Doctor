import React from 'react';
import PropTypes from 'prop-types';

const Stats = props => (
  <div className="card">
    <div className="container">
      <h4><b>{props.username}</b></h4>
      <p>Likes: {props.likeCount}</p>
    </div>
  </div>
);

Stats.propTypes = {
  username: PropTypes.string.isRequired,
  likeCount: PropTypes.number.isRequired,
};

export default Stats;
