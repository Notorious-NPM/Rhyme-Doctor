import axios from 'axios';
import APIKEY from './config';

const findSynCtrl = (req, res) => {
  axios
    .get(`https://wordsapiv1.p.mashape.com/words/${req.query.word}/synonyms`, APIKEY)
    .then((res2) => {
      res.send(res2.data.synonyms);
    })
    .catch((error) => {
      console.log(error);
    });
};


export default findSynCtrl;
