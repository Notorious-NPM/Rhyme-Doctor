import React from 'react';
import $ from 'jquery';

import store from '../../redux/store';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/auth/login',
      data: {
        username: $('#username').val(),
        password: $('#password').val(),
      },
      success(res) {
        store.dispatch({ type: 'sessionlogin' });
        console.log(res);
      },
    });
  };
  return (
    <form className="form-group" action="/api/auth/login" method="POST">
      <label htmlFor="username">Username
        <input className="form-control-sm" id="username" type="text" name="username" placeholder="Username" />
      </label>
      <label htmlFor="password">Password
        <input className="form-control-sm" id="password" type="password" name="password" placeholder="Password" />
      </label>
      <input onClick={submitHandler} type="button" value="Submit" className="btn btn-outline-primary btn-sm" />
    </form>
  );
};

export default Login;
