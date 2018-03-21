import express from 'express';
import { getRhymes, makePersonalRhyme } from './rhymeCtrl';

const router = express.Router();

router.route('/rhyme')
  .get(getRhymes)
  .post(makePersonalRhyme);

export default router;
