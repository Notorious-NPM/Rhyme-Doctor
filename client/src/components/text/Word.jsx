import React from 'react';
import PropTypes from 'prop-types';

const Word = ({ word, x, y }) => (
  <span>{` ${word} `}</span>
);

Word.propTypes = {
  word: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Word;
