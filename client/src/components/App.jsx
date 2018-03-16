import React from 'react';
<<<<<<< HEAD
import $ from 'jquery';
import { BrowserRouter as Router, Route } from 'react-router-dom';
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
>>>>>>> Routing to user profile page

import store from '../redux/store';
import Login from './top/Login';
import Signup from './top/Signup';
/* import Paragraph from './text/Paragraph';
import Friend from './buttons/Friend';
import Textarea from './textarea/Textarea';
<<<<<<< HEAD
import ThesaurusForm from '../components/thesaurus/ThesaurusForm'; */
import RapPost from './rap-post/RapPost';
import Navbar from './navbar';
import Home from './home';
=======
import ThesaurusForm from '../components/thesaurus/ThesaurusForm';
import Navbar from './navbar';
import RapPost from './rap-post/RapPost';
import Profile from './user/Profile';
import ProfileButton from './buttons/Profile';

>>>>>>> Routing to user profile page

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/auth/loggedin',
      success(response) {
        if (response === 'true') {
          store.dispatch({
            type: 'sessionlogin',
          });
        }
      },
    });
  }

  /* navSwitch = () => {
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
  } */

  render() {
    return (
      <Router>
        <div className="container-fluid">
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul> */}
          <Navbar /* history={history} */ />
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/feed" component={RapPost} />
        </div>
      </Router>
    );
  }
}

export default App;
