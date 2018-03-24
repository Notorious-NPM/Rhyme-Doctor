import unirest from 'unirest';
import substrings from 'common-substrings';
import ALTERNATE_KEY from './config';

const IPA_VOWELS = ['e', 'æ', 'ʌ', 'ʊ', 'ɒ', 'ə', 'i', 'ɜ', 'ɛ', 'ɔ', 'u', 'ɑ', 'ɪə', 'eə', 'eɪ', 'ɔɪ', 'aɪ', 'əʊ', 'aʊ'];

const fillString = '#';
const crayons = [
  '#FF861F', // Orange
  '#FBE870', // Yellow
  '#C5E17A', // Yellow-Green
  '#76D7EA', // Sky Blue
  '#03BB85', // Aqua Green
  '#8FD8D8', // Light Blue
  '#FFCBA4', // Peach
  '#CD919E', // Pink
  '#FA9D5A', // Tan
  '#F4FA9F', // Lemon Yellow
  '#6CDAE7', // Turquoise Blue
  '#FFC1CC', // Bubble Gum
  '#CC99BA', // Mauve
  '#EBE1C2', // Sand
  '#DCCCD7', // Pale Rose
  '#708EB3', // Metallic Blue
];

const isVowel = ({ name }) => {
  for (let i = 0; i < IPA_VOWELS.length; i += 1) {
    const [score] = substrings.weigh([name, IPA_VOWELS[i]], { minLength: 1 });
    if (score && score.weight > 1) { // Toy with this... 3 is too strict?
      return true;
    }
  }
  return false;
};

const API = word =>
  new Promise((resolve) => {
    unirest.get(`https://wordsapiv1.p.mashape.com/words/${word}/pronunciation`)
      .header('X-Mashape-Key', ALTERNATE_KEY)
      .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
      .end((response) => {
        console.log(word, response.body);
        resolve(response.body);
      });
  });

const parse = (text, strictness) =>
  new Promise((resolve) => {
    const lines = text.split('\n');
    const APIcalls = [];
    const colors = [];
    const coords = [];
    const words = [];
    const jump = [];
    lines.forEach((line, x) => {
      const wordsByComma = line.split(',');
      let accumLength = 0;
      jump[x] = 2;
      wordsByComma.forEach((subline, y) => {
        let wordsInLine = subline.split(' ');
        wordsInLine = wordsInLine.filter(word => word !== '');
        colors.push(null);
        coords.push(`${x}, ${accumLength + (wordsInLine.length - 1)}`);
        accumLength += wordsInLine.length;
        words.push(wordsInLine[wordsInLine.length - 1]);
        if (y !== wordsByComma.length - 1) {
          jump[x] += 1;
        }
      });
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
            if (k - i > jump[i]) {
              break;
            }
            const commonSubstrings = substrings.weigh([rip[i], rip[k]], { minLength: 1 });
            let score;
            for (let j = 0; j < commonSubstrings.length; j += 1) {
              if (isVowel(commonSubstrings[j])) {
                score = commonSubstrings[j];
                break;
              }
            }
            if (score && score.weight > strictness) { // Revisit later, either 1 or 3.
              /* const endRhyme = rip[i].indexOf(score.name) === rip[i].length - score.name.length
                               && rip[k].indexOf(score.name) === rip[k].length - score.name.length; */ // eslint-disable-line
              // if (endRhyme) {
                /* eslint-disable */ // eslint-disable-line
                if (!colors[i] && !colors[k]) {
                  colors[i] = crayons[crayon];
                  colors[k] = crayons[crayon];
                  dirtyBrush = true;
                } else if (!colors[k]) {
                  colors[k] = colors[i];
                  dirtyBrush = true;
                } else if (!colors[i]) {
                  colors[i] = colors[k];
                  dirtyBrush = true;
                }
                /* eslint-enable */
              // }
            }
          }
          if (dirtyBrush) {
            dirtyBrush = false;
            crayon += 1;
          }
        }
        console.log(coords);
        console.log(colors);
        resolve([coords, colors]);
      });
  });

export default parse;
