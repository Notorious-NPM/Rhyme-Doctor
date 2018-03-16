import React from 'react';
import PropTypes from 'prop-types';

import Word from './Word';

const Line = ({ line, x }) => {
  line = line.split(' '); // eslint-disable-line
  console.log(line);
  return (
    <div>
      {line.map((word, y) =>
        <Word key={y} word={word} x={x} y={y} />)
      }
    </div>
  );
};

Line.propTypes = {
  line: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
};

export default Line;
