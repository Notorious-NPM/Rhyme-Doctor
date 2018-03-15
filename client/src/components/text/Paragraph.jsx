import React from 'react';
import PropTypes from 'prop-types';

import Line from './Line';

const Paragraph = ({ text }) => {
  const lines = text.split('\n');
  return (
    <div className="col">
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
