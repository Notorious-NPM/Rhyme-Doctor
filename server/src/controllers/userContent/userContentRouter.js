import express from 'express';
import { getUserDataCtrl, getUserPostsCtrl } from './userContentCtrl';

const router = express.Router();

router.route('/')
  .get(getUserDataCtrl);

router.route('/posts')
  .get(getUserPostsCtrl);


export default router;
