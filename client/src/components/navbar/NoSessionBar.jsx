/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import { Link } from 'react-router-dom';

const NoSessionBar = () => (
  <div>
    <nav id="nav" className="navbar navbar-expand-md navbar-dark bg-dark" >
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto custom-a-tag" href="#">℞hyme Doctor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  </div>
);

export default NoSessionBar;
