import React from 'react';

const Login = () => (
  <form action="/auth/login" method="POST">
    <input type="text" name="username" value="Username" /><br /><br />
    <input type="password" name="password" value="Password" /><br /><br />
    <input type="submit" value="Submit" />
  </form>
);

export default Login;
