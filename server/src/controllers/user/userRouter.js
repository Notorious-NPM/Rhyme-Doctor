import express from 'express';
import { followCtrl, unfollowCtrl, addfriendCtrl, queryfriendCtrl, unfriendCtrl } from './userCtrl';

const router = express.Router();

router.route('/follow')
  .post(followCtrl);

router.route('/unfollow')
  .post(unfollowCtrl);

router.route('/friend')
  .get(queryfriendCtrl)
  .post(addfriendCtrl)
  .delete(unfriendCtrl);

export default router;
