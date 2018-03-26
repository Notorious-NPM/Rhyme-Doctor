import React from 'react';
import PropTypes from 'prop-types';

const RhymeList = ({ rhymes }) => (
  <div>
    <div style={{ overflow: 'auto', height: '300px' }}>
      {rhymes.map(rhyme => <div>{rhyme}</div>)}
    </div>
  </div>
);

RhymeList.propTypes = {
  rhymes: PropTypes.array.isRequired, // eslint-disable-line
};

export default RhymeList;
