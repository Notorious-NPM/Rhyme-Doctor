import express from 'express';
import { getUserDataCtrl, getUserPostsCtrl, addImageCtrl } from './userContentCtrl';

const router = express.Router();

router.route('/')
  .get(getUserDataCtrl);

router.route('/posts')
  .get(getUserPostsCtrl);

router.route('/image')
  .put(addImageCtrl);


export default router;
