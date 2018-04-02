const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
// const forceSSL = require('express-force-ssl');

const session = require('express-session');
const passport = require('passport');

export default [
  // forceSSL(),
  compression(),
  helmet(),
  cors({
    origin: '*',
    methods: 'GET, POST, DELETE, PUT',
  }),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  session({
    secret: 'bad hamstring',
    resave: false,
    saveUninitialized: true,
  }),
  passport.initialize(),
  passport.session(),
];
