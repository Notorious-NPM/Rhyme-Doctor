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
import About from './about/About';
import Privacy from './privacy/Privacy';
import FriendChatContainer from '../components/buttons/FriendChatContainer';
import Footer from './footer';
import './app.css';

class App extends React.Component {
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/auth/loggedin',
      success(response) {
        response = JSON.parse(response); // eslint-disable-line
        if (response.session) {
          // Order for safety.
          store.dispatch({
            type: 'browserrestore',
            body: {
              username: response.username,
            },
          });
          store.dispatch({
            type: 'sessionlogin',
            body: {
              username: response.username,
            },
          });
        } else {
          store.dispatch({
            type: 'browserrestore',
            body: {
              username: 'anonymous',
            },
          });
        }
      },
    });
  }

  render() {
    return (
      <Router>
        <div className="app-container">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={RapPost} />
          <Route path="/subscriptions" render={() => <RapPost subscription={1} />} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <FriendChatContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
