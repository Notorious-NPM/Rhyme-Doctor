import express from 'express';
import findRhymeCtrl from './wordsapiCtrl';

const router = express.Router();

router.route('/rhyme')
  .get(findRhymeCtrl);


export default router;
