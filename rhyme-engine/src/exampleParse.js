import unirest from 'unirest';
import substrings from 'common-substrings';
import API_KEY from './config';

const lyrics = `I have some jello
it makes me mellow
I am an HR fellow
Finished shit on hello`;

const API = word =>
  new Promise((resolve, reject) => {
    unirest.get(`https://wordsapiv1.p.mashape.com/words/${word}/pronunciation`)
      .header('X-Mashape-Key', API_KEY)
      .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
      .end((response) => {
        resolve(response.body);
      });
  });

const parse = (text) => {
  const lines = text.split('\n');
  // const orderedWords = {};
  const APIcalls = [];
  const words = lines.map((line) => {
    const wordsInLine = line.split(' ');
    return wordsInLine[wordsInLine.length - 1];
  });
  words.forEach((word, index) => {
    APIcalls.push(API(word));
    /* API(word)
      .then((response) => {
        console.log(response.pronunciation);
        console.log(index);
        orderedWords[index] = JSON.parse(JSON.stringify(response.pronunciation));
      }); */
  });
  Promise.all(APIcalls)
    .then((data) => {
      const rip = data.map(({ pronunciation }) => // eslint-disable-line
        typeof pronunciation === 'object' && 'all' in pronunciation ? pronunciation.all : pronunciation);
      console.log(substrings.weigh(rip));
    });
  /* console.log(orderedWords);
  const keys = Object.keys(orderedWords);
  keys.forEach(key => console.log(orderedWords[key])); */
};
parse(lyrics);

/* unirest.get(`https://wordsapiv1.p.mashape.com/words/${'hat'}/pronunciation`)
  .header('X-Mashape-Key', API_KEY)
  .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
  .end((response) => {
    console.log(response.body);
    res.status(200).end(JSON.stringify(response.body));
  }); */
