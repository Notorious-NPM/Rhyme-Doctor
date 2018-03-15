import express from 'express';
import { findRhymeCtrl, findSynCtrl, findPronunciationCtrl } from '../controllers/wordsapiCtrl.js';

const router = express.Router();

router.route('/rhyme')
  .get(findRhymeCtrl);

router.route('/synonym')
  .get(findSynCtrl);

router.route('/pronunciation')
  .get(findPronunciationCtrl);

export default router;