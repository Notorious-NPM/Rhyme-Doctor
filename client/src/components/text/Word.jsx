import React from 'react';
import PropTypes from 'prop-types';

import store from '../../redux/store';

/* const Word = ({ word, x, y }) => (
  <span>{` ${word} `}</span>
); */

class Word extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.x, props.y, ' – ', props.word);
    this.state = { highlighted: `${props.x}, ${props.y}` in store.getState() };
    if (this.state.highlighted) {
      this.state.color = store.getState()[`${props.x}, ${props.y}`];
    }
    store.subscribe(() => {
      if (`${props.x}, ${props.y}` in store.getState()) {
        this.setState({
          highlighted: true,
          color: store.getState()[`${props.x}, ${props.y}`],
        });
      } else {
        this.setState({
          highlighted: false,
        });
      }
    });
  }

  color = (e) => {
    e.preventDefault();
    const payload = {
      type: 'highlight',
      body: {
        x: this.props.x,
        y: this.props.y,
      },
    };
    store.dispatch(payload);
  }

  render() {
    const style = {
      color: this.state.highlighted ? this.state.color : '#cdd0d6',
    };
    return (
      <span /* eslint-disable-line */
        role="button"
        style={style}
        onClick={this.color}
        onKeyDown={this.color}
      >
        <b>{` ${this.props.word} `}</b>
      </span>
    );
  }
}

Word.propTypes = {
  word: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default Word;
