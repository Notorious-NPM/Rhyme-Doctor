import express from 'express';
import { upvoteCtrl, downvoteCtrl } from './voteCtrl';

const router = express.Router();

router.route('/upvote')
  .put(upvoteCtrl);

router.route('/downvote')
  .put(downvoteCtrl);

export default router;
