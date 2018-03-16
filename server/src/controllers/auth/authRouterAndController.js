/* eslint-disable no-else-return */

import express from 'express';
import passport from 'passport';
import validate from 'express-validation';
import local from 'passport-local';
import bcrypt from 'bcrypt';

import User from '../../database/models/user';

import userpass from './formValidation';

const LocalStrategy = local.Strategy;
const router = express.Router();

passport.use(new LocalStrategy({
  passReqToCallback: true,
}, (req, username, password, done) => {
  User.findAll({
    where: {
      name: username,
    },
  }).then((users) => { // eslint-disable-line
    if (users.length > 0) {
      bcrypt.compare(password, users[0].dataValues.password, (err, res) => {
        if (res) {
          req.message = `Successfully signed in as: ${users[0].dataValues.name}`;
          return done(null, { username: users[0].dataValues.name, id: users[0].dataValues.id });
        } else {
          req.message = 'Incorrect password!';
          return done(null, false);
        }
      });
    } else {
      req.message = 'No user with that username.';
      return done(null, false);
    }
  });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.route('/loggedin')
  .get((req, res) => {
    res.status(200).end(req.isAuthenticated().toString());
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
  .post(validate(userpass), (req, res) => {
    const { username, password } = req.body;
    User.findAll({
      where: {
        name: username,
      },
    }).then((users) => {
      if (users.length > 0) {
        res.status(409).end('That username is taken!');
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => { // eslint-disable-line
            User.create({
              name: username,
              password: hash,
            }).then((user) => {
              req.login(user, (err) => { // eslint-disable-line
                if (err) {
                  res.status(500).end('Something went wrong with our authentication.');
                } else {
                  res.status(201).end(`Signed up as: ${user.name}`);
                }
              });
            });
          });
        });
      }
    });
  });

export default router;
