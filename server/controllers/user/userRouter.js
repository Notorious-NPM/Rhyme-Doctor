import express from 'express';
import { loginCtrl, signupCtrl, followCtrl, unfollowCtrl } from './userCtrl';

const router = express.Router();

// TODO: use middleware to authenticate users here

router.route('/login')
  .get(loginCtrl);

router.route('/signup')
  .post(signupCtrl);

router.route('/follow')
  .post(followCtrl);

router.route('/unfollow')
  .post(unfollowCtrl);

export default router;
