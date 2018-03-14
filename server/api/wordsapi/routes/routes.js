import express from 'express';
import router from express.Router();
import findRhymeCtrl from '../controllers/wordsapiCtrl.js';

router.route('/rhyme')
  .get(findRhymeCtrl);


//router.route(/rhyme).get()