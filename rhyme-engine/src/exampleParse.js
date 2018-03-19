import unirest from 'unirest';
import substrings from 'common-substrings';
import API_KEY from './config';

const fillString = '#';

const lyrics = `I have some jello
it makes me mellow
I am an HR fellow
Finished shit on hello`;

const API = word =>
  new Promise((resolve) => {
    unirest.get(`https://wordsapiv1.p.mashape.com/words/${word}/pronunciation`)
      .header('X-Mashape-Key', API_KEY)
      .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
      .end((response) => {
        resolve(response.body);
      });
  });

const parse = (text) => {
  const lines = text.split('\n');
  const APIcalls = [];
  const words = lines.map((line) => {
    const wordsInLine = line.split(' ');
    return wordsInLine[wordsInLine.length - 1];
  });
  words.forEach((word) => {
    APIcalls.push(API(word));
  });
  Promise.all(APIcalls)
    .then((data) => {
      const rip = data.map(({ pronunciation }) => {
        if (typeof pronunciation === 'object' && 'all' in pronunciation) {
          return pronunciation.all;
        } else if (pronunciation) {
          return pronunciation;
        }
        return fillString; // ah... coupling
      });
      const rhymes = [];
      for (let i = 0; i < rip.length - 1; i += 1) {
        for (let k = i + 1; k < rip.length; k += 1) {
          if (k - i > 2) {
            break;
          }
          rhymes.push([[words[i], words[k]], JSON.stringify(substrings.weigh([rip[i], rip[k]]))]);
        }
      }
      console.log(rhymes);
    });
};

parse(lyrics);
