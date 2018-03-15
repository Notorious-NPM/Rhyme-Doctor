const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const session = require('express-session');
const passport = require('passport');

export default [
  helmet(),
  cors({
    origin: '*', // to be changed to site address
    methods: 'GET, POST, DELETE, PUT',
  }),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  session({ secret: 'bad hamstring' }),
  passport.initialize(),
  passport.session(),
];
