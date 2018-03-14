import express from 'express';
const router = express.Router();
import {loginCtrl, signupCtrl, followCtrl, unfollowCtrl} from './userCtrl';

//TODO: use middleware to authenticate users here

router.route('/login')
  .get(loginCtrl)

router.route('/signup')
  .post(signupCtrl)

router.route('/follow')
  .post(followCtrl)

router.route('/unfollow')
  .post(unfollowCtrl)

export default router;