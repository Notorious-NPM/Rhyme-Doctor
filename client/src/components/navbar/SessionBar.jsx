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
      store.dispatch({ type: 'wipestore' });
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
            <Link className="nav-link custom-a-tag" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-a-tag" to="/feed">Top/News Feed</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-a-tag" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link custom-a-tag" to="/subscriptions">Subscriptions</Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto custom-a-tag" href="#">Rhyme Doctor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link custom-a-tag" style={{ display: 'inline' }} to="/about">About</Link>
            <Link className="nav-link custom-a-tag" to="/" style={{ display: 'inline' }}>
              <a onClick={logout} style={{ display: 'inline' }} className="nav-link custom-a-tag" /* eslint-disable-line */ >Logout</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default SessionBar;
