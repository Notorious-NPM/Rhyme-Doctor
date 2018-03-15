import Joi from 'joi';
import express from 'express';
import passport from 'passport';
import validate from 'express-validation';
import local from 'passport-local';

const LocalStrategy = local.Strategy;
const router = express.Router();

passport.use(new LocalStrategy((username, password, done) =>
  done(null, { username: 'admin' })));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.route('/login')
  .post(validate({
    body: {
      username: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/), // See below, but for usernames.
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/), // Password must be alphanumeric and between 3 and 30 characters in length, inclusive.
    },
  }), passport.authenticate('local'), (req, res) => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.status(200).end('Logged in!');
  });

export default router;
