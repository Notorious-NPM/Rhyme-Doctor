/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import $ from 'jquery';

import store from '../../redux/store';

const history = createHistory();

const logout = () => {
  $.ajax({
    url: '/api/auth/logout',
    method: 'POST',
    success() {
      store.dispatch({ type: 'sessionlogout' });
      history.push('/');
    },
  });
};

const SessionBar = () => (
  <div>
    <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/feed">Top/News Feed</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Subscriptions</a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">Rhyme Doctor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" style={{ display: 'inline' }} to="/about">About</Link>
            <a onClick={logout} style={{ display: 'inline' }} className="nav-link" /* eslint-disable-line */ >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default SessionBar;
