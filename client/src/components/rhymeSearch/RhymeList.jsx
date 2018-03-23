import React from 'react';
import PropTypes from 'prop-types';

const RhymeList = ({ rhymes }) => (
  <div>
    <div>
      {rhymes.map(rhyme => <div>{rhyme}</div>)}
    </div>
  </div>
);

RhymeList.propTypes = {
  rhymes: PropTypes.array.isRequired, // eslint-disable-line
};

export default RhymeList;
