// import helpers here

const getRhymes = (req, res) => {
  res.status(200).send('rhymes');
};

const makePersonalRhyme = (req, res) => {
  const { word1, word2 } = req.body;
  // req.user.id

  res.status(201).send('rhyme');
};

export { getRhymes, makePersonalRhyme };
