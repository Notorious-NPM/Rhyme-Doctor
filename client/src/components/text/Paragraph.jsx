import React from 'react';
import PropTypes from 'prop-types';

import Line from './Line.jsx';

const Paragraph = ({ text }) => {
  const lines = text.split('\n');
  console.log(lines);
  return (
    <div>
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
