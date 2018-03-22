import express from 'express';
import findSynCtrl from './wordsapiCtrl';

const router = express.Router();

router.route('/synonym')
  .get(findSynCtrl);


export default router;
