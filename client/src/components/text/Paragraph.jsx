import React from 'react';
import PropTypes from 'prop-types';

import Line from './Line';

import './text.css';

const Paragraph = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div className="col paragraph" style={{ margin: '5px 5px 5px 5px' }} /* DRY... */ >
      {lines.map((line, x) =>
        <Line key={x} line={line} x={x} />)
      }
    </div>
  );
};

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Paragraph;
