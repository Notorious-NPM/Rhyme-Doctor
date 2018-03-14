import express from 'express';
import router from express.Router();
import { findRhymeCtrl, findSynCtrl, findPronunciation } from '../controllers/wordsapiCtrl.js';

router.route('/rhyme')
  .get(findRhymeCtrl);

router.route('/synonym')
  .get(findSynCtrl);

router.route('/pronunciation')
  .get(findPronunciationCtrl);