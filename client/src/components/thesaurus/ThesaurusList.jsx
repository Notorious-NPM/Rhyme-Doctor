import React from 'react';
import PropTypes from 'prop-types';

const ThesaurusList = ({ synonyms }) => (
  <div>
    <div>
      {synonyms.map(synonym => <div>{synonym}</div>)}
    </div>
  </div>
);

ThesaurusList.propTypes = {
  synonyms: PropTypes.array.isRequired, // eslint-disable-line
};

export default ThesaurusList;
