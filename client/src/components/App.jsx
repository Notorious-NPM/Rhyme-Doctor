import React from 'react';

import store from '../redux/store.js';
import Login from './top/Login.jsx';
import Paragraph from './text/Paragraph.jsx';
import Friend from '../components/Buttons/Friend';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
      console.log(this.state);
    });
  }

  navSwitch = () => {
    console.log('hm');
    if (this.state.session) {
      return (
        <div>
          <h2>You is logged in.</h2>
        </div>
      );
    }
    return (
      <div>
        <Login />
      </div>
    );
  }

  render() {
    return (
      <div align="center">
        {this.navSwitch()}
        <h3>Lyrics</h3>
        <Paragraph text={this.state.text} />
        <Friend />
      </div>
    );
  }
}

export default App;
