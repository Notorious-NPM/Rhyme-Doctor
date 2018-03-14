import React from 'react';

import store from '../redux/store.js';
import Paragraph from './text/Paragraph.jsx';

class App extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  render() {
    return (
      <div>
        <Paragraph text={this.state.text} />
      </div>
    );
  }
}

export default App;
