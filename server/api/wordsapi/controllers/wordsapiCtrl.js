import axios from 'axios';
import APIKEY from '../../config';

const findRhymeCtrl = () => {
  //find rhyme of word
}

const findSynCtrl = (req, res) => {
  res.send(APIKEY);
}

const findPronunciationCtrl = () => {
  //find pronunciation of word
}
export { findRhymeCtrl, findSynCtrl, findPronunciationCtrl }