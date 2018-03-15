import express from 'express';
import passport from 'passport';
import validate from 'express-validation';
import local from 'passport-local';
import bcrypt from 'bcrypt';

import User from '../../database/models/user';

import userpass from './formValidation';

const LocalStrategy = local.Strategy;
const router = express.Router();

passport.use(new LocalStrategy((username, password, done) => {
  User.findAll({
    where: {
      name: username,
    },
  }).then((users) => {
    if (users.length > 0) {
      bcrypt.compare(password, users[0].password, (err, res) => {
        if (res) {
          return done(null, { username: users[0].name });
        }
        return done(null, false, { message: 'Incorrect password!' });
      });
    }
    return done(null, false, { message: 'No user with that username.' });
  });
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

router.route('/login')
  .post(validate(userpass), passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }));

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
        bcrypt.hash(password, (err, hash) => {
          User.create({
            name: username,
            password: hash,
          }).then((user) => {
            res.status(201).end(`Successfully signed up with: ${user.name}!`);
          });
        });
      }
    });
  });

export default router;
