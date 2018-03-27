import axios from 'axios';
import APIKEY from './config';

const findRhymeCtrl = (req, res) => {
  axios
    .get(`https://wordsapiv1.p.mashape.com/words/${req.query.word}/rhymes`, APIKEY)
    .then((res2) => {
      res.send(res2.data.rhymes.all);
    })
    .catch((error) => {
      console.log(error);
    });
};


export default findRhymeCtrl;
