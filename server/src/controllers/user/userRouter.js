import express from 'express';
import { loginCtrl, signupCtrl, followCtrl, unfollowCtrl, addfriendCtrl, queryfriendCtrl, unfriendCtrl } from './userCtrl';

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

router.route('/friend')
  .get(queryfriendCtrl)
  .post(addfriendCtrl)
  .delete(unfriendCtrl);

export default router;
