import React from 'react';
import { Route, Switch } from 'react-router-dom';

import store from '../redux/store';
import Login from './top/Login';
import RapPost from './rap-post/RapPost';
import Navbar from './navbar';
import Home from './home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  navSwitch = () => {
    if (this.state.session) {
      return (
        <div className="row center-block mx-auto">
          <div
            className="col text-center"
            style={{
              float: 'none',
              margin: '0 auto',
            }}
          ><h2>You is logged in.</h2>
          </div>
        </div>
      );
    }
    return (
      <div className="row center-block mx-auto">
        <div
          className="col-md-2 text-center"
          style={{
            float: 'none',
            margin: '0 auto',
          }}
        ><Login />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/feed" component={RapPost} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;

// {this.navSwitch()}

// <RapPost />