/* eslint-disable no-else-return */

import express from 'express';
import passport from 'passport';
import validate from 'express-validation';
import local from 'passport-local';
import bcrypt from 'bcrypt';
import Promise from 'bluebird';

import User from '../../database/models/user';

import userpass from './formValidation';

const LocalStrategy = local.Strategy;
const router = express.Router();

const compare = Promise.promisify(bcrypt.compare);
const genSalt = Promise.promisify(bcrypt.genSalt);
const hash = Promise.promisify(bcrypt.hash);

passport.use(new LocalStrategy({
  passReqToCallback: true,
}, async (req, username, password, done) => {
  const user = await User.findOne({ where: { name: username } });
  if (user) {
    const result = await compare(password, user.dataValues.password);
    if (result) {
      req.message = `Successfully signed in as: ${user.dataValues.name}`;
      return done(null, { username: user.dataValues.name, id: user.dataValues.id });
    } else {
      req.message = 'Incorrect password!';
      return done(null, false);
    }
  } else {
    req.message = 'No user with that username.';
    return done(null, false);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.route('/loggedin')
  .get((req, res) => {
    if (req.isAuthenticated()) {
      res.status(200).end(JSON.stringify({
        session: true,
        username: req.user.username,
      }));
    } else {
      res.status(200).end(JSON.stringify({
        session: false,
      }));
    }
  });

router.route('/login')
  .post(validate(userpass), passport.authenticate('local', { failWithError: true }), (req, res, next) => // eslint-disable-line
    res.status(200).end(req.message), (err, req, res, next) => // eslint-disable-line
    res.status(400).end(req.message));

router.route('/logout')
  .post((req, res) => {
    req.logout();
    res.status(200).redirect('/');
  });

router.route('/signup')
  .post(validate(userpass), async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { name: username } });
    if (user) {
      res.status(409).end('That username is taken!');
    } else {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      const { id, name: uname } = await User.create({ name: username, password: hashedPassword });
      req.login({ id, username: uname }, (err) => {
        if (err) {
          res.status(500).end('Something went wrong with our authentication.');
        } else {
          res.status(201).end(JSON.stringify({
            username: uname,
          }));
        }
      });
    }
  });

export default router;
