import Words from '../models/words';

const addWord = word =>
  Words.create({
    word,
  });

export default addWord;
