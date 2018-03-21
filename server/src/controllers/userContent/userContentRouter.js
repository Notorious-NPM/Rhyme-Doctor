import express from 'express';
import { getUserDataCtrl, getUserPostsCtrl, addImageCtrl, addBioCtrl, getBioCtrl } from './userContentCtrl';

const router = express.Router();

router.route('/')
  .get(getUserDataCtrl);

router.route('/posts')
  .get(getUserPostsCtrl);

router.route('/image')
  .put(addImageCtrl);

router.route('/bio')
  .put(addBioCtrl);

export default router;
