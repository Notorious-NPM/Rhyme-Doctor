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
    <form action="/api/auth/login" method="POST">
      <input id="username" type="text" name="username" /><br /><br />
      <input id="password" type="password" name="password" /><br /><br />
      <input onClick={submitHandler} type="submit" value="Submit" />
    </form>
  );
};

export default Login;
