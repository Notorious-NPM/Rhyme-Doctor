import unirest from 'unirest';
import substrings from 'common-substrings';
import API_KEY from './config';

const fillString = '#';
const crayons = [
  '#FF861F',
  '#FBE870',
  '#C5E17A',
  '#76D7EA',
  '#03BB85',
  '#8FD8D8',
  '#FFCBA4',
  '#CD919E',
  '#FA9D5A',
  '#F4FA9F',
  '#6CDAE7',
  '#FFC1CC',
  '#CC99BA',
  '#EBE1C2',
  '#DCCCD7',
  '#708EB3',
];

const lyrics = `I have some jello
it makes me red
I am an HR fellow
Finished shit on bed`;

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
  const colors = [];
  const words = lines.map((line) => {
    const wordsInLine = line.split(' ');
    colors.push(null);
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
        return fillString;
      });
      let crayon = 0;
      let dirtyBrush = false;
      for (let i = 0; i < rip.length - 1; i += 1) {
        for (let k = i + 1; k < rip.length; k += 1) {
          /* if (k - i > 2) {
            break;
          } */ // Chains...
          const [score] = substrings.weigh([rip[i], rip[k]], { minLength: 2 });
          console.log(rip[i], rip[k], score);
          if (score && score.weight > 3) {
            if (!colors[i]) {
              colors[i] = crayons[crayon];
            }
            if (!colors[k]) {
              colors[k] = crayons[crayon];
            }
            dirtyBrush = true;
          }
        }
        if (dirtyBrush) {
          crayon += 1;
        }
      }
      console.log(words);
      console.log(colors);
    });
};

parse(lyrics);
