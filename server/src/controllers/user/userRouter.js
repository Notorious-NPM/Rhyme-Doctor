import express from 'express';
import {
  followCtrl,
  unfollowCtrl,
  addfriendCtrl,
  queryfriendCtrl,
  unfriendCtrl,
  checkFriendshipCtrl,
} from './userCtrl';

const router = express.Router();

router.route('/follow')
  .post(followCtrl);

router.route('/unfollow')
  .post(unfollowCtrl);

router.route('/friend')
  .get(queryfriendCtrl)
  .post(addfriendCtrl)
  .delete(unfriendCtrl);

router.route('/checkFriendship')
  .get(checkFriendshipCtrl);

export default router;
