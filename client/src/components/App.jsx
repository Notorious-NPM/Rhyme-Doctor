import React from 'react';

import store from '../redux/store.js';
import Paragraph from './text/Paragraph.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  render() {
    return (
      <div align="center">
        <h5>Lyrics</h5>
        <Paragraph text={this.state.text} />
      </div>
    );
  }
}

export default App;
