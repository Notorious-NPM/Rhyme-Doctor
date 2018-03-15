import React from 'react';

import store from '../redux/store';
import Login from './top/Login';
import Paragraph from './text/Paragraph';
import Friend from './buttons/Friend';
import Textarea from './textarea/Textarea';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
      // console.log(this.state);
    });
  }

  navSwitch = () => {
    // console.log('hm');
    if (this.state.session) {
      return (
        <div className="row">
          <h2>You is logged in.</h2>
        </div>
      );
    }
    return (
      <div className="row">
        <Login />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.navSwitch()}
        <div className="row">
          <div
            className="col text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
          ><h3>Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph text={this.state.text} />
        </div>
        <Friend />
      </div>
    );
  }
}

export default App;
