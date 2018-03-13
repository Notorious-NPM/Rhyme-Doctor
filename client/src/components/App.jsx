import React from 'react';
import store from '../redux/store.js'; // eslint-disable-line

class App extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
  }

  upvote = () => { // eslint-disable-line
    store.dispatch({
      type: 'upvote',
    });
  }

  downvote = () => { // eslint-disable-line
    store.dispatch({
      type: 'downvote',
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.upvote}>Up</button>
        <button onClick={this.downvote}>Down</button>
      </div>
    );
  }
}

export default App;
