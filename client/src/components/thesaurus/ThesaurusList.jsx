import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class ThesaurusList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.synonyms.map(synonym => 
          <div>{synonym}</div>
        )}
        </div>
      </div>
    );
  }
}

ThesaurusList.propTypes = {
  synonym: PropTypes.string.isRequired,
};

export default ThesaurusList;