import createPersonalRhyme from '../../database/dbHelpers/rhymeHelpers';

const getRhymes = (req, res) => {
  res.status(200).send('rhymes');
};

const makePersonalRhyme = (req, res) => {
  if (req.user.id) {
    const { word1, word2 } = req.body;
    createPersonalRhyme(req.user.id, word1, word2);
    res.status(201).send('saved');
  } else {
    res.status(404).send('FORBIDDEN');
  }
};

export { getRhymes, makePersonalRhyme };
