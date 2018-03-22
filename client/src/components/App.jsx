import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from '../redux/store';
import Login from './top/Login';
import Signup from './top/Signup';
import RapPost from './rap-post/RapPost';
import Profile from './user/Profile';
import Navbar from './navbar';
import Home from './home';
import './app.css';

class App extends React.Component {
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/auth/loggedin',
      success(response) {
        response = JSON.parse(response); // eslint-disable-line
        if (response.session) {
          store.dispatch({
            type: 'sessionlogin',
            body: {
              user: response.username,
            },
          });
        }
      },
    });
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={RapPost} />
        </div>
      </Router>
    );
  }
}

export default App;
