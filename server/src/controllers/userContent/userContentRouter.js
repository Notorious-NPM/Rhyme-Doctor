import express from 'express';
import getUserPostsCtrl from './userContentCtrl';

const router = express.Router();

router.route('/')
  .get(getUserPostsCtrl);
// .get(getUserStatsCtrl);

// router.route('/signup')
//   .post(signupCtrl);

// router.route('/follow')
//   .post(followCtrl);

// router.route('/unfollow')
//   .post(unfollowCtrl);

// router.route('/friend')
//   .get(queryfriendCtrl)
//   .post(addfriendCtrl)
//   .delete(unfriendCtrl);

export default router;
