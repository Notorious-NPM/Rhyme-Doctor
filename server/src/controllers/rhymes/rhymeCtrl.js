import { createPersonalRhymes, searchPersonalRhymes } from '../../database/dbHelpers/rhymeHelpers'

const getRhymes = (req, res) => {
  if (req.user.id) {
    let { word1, word2 } = req.body;
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    searchPersonalRhymes(req.user.id, word1, word2)
      .then(result => res.status(200).send(result))
      .catch(err => console.log('getRhymes error: ', err));
  } else {
    res.status(404).send('Forbidden');
  }
};

const makePersonalRhyme = (req, res) => {
  let { word1, word2 } = req.body;
  if (req.user.id) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    createPersonalRhymes(req.user.id, word1, word2)
      .then(() => res.status(201).send('personal rhyme saved!'))
      .catch(err => console.log('makePersonalRhyme error: ', err));
  } else {
    res.status(404).send('Forbidden');
  }
};

export { getRhymes, makePersonalRhyme };
