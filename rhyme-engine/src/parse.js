import unirest from 'unirest';
import substrings from 'common-substrings';
import SyllaRhyme from 'syllarhyme';
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

const API = word => // eslint-disable-line
  new Promise((resolve) => {
    unirest.get(`https://wordsapiv1.p.mashape.com/words/${word}/pronunciation`)
      .header('X-Mashape-Key', ALTERNATE_KEY)
      .header('X-Mashape-Host', 'wordsapiv1.p.mashape.com')
      .end((response) => {
        resolve(response.body);
      });
  });

const fromSr = word =>
  new Promise((resolve) => {
    SyllaRhyme((sr) => {
      let options = sr.pronunciation(word, 'ipa');
      options = options.map(option => option.replace(/ /g, ''));
      console.log(word, options);
      if (options.length === 0) options = [fillString];
      resolve(options);
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
      APIcalls.push(fromSr(word)); // Switch here.
    });
    Promise.all(APIcalls)
      .then((data) => {
        /* const rip = data.map(({ pronunciation }) => {
          if (typeof pronunciation === 'object' && 'all' in pronunciation) {
            return pronunciation.all;
          } else if (pronunciation) {
            return pronunciation;
          }
          return fillString;
        }); */
        const rip = data;
        let crayon = 0;
        let dirtyBrush = false;
        console.log(rip);
        for (let i = 0; i < rip.length - 1; i += 1) {
          if (typeof rip[i] === 'object' && rip[i].length > 1) {
            for (let h = 0; h < rip[i].length; h += 1) {
              let start = 0;
              let length = 0;
              for (let k = i + 1; k < rip.length; k += 1) {
                // console.log('top');
                if (k - i > jump[i]) {
                  break;
                }
                if (typeof rip[k] === 'object') {
                  length = rip[k].length; // eslint-disable-line
                }
                let compare;
                if (length === 0) {
                  compare = rip[k][0]; // eslint-disable-line
                } else {
                  compare = rip[k][start];
                }
                const commonSubstrings = substrings.weigh([rip[i][h], compare], { minLength: 1 });
                let score;
                for (let j = 0; j < commonSubstrings.length; j += 1) {
                  if (isVowel(commonSubstrings[j])) {
                    score = commonSubstrings[j];
                    break;
                  }
                }
                if (score && score.weight > strictness) {
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
                }
                if (!dirtyBrush) {
                  if (start !== length) {
                    start += 1;
                    k -= 1; // l33t hax00r
                  }
                }
              }
            }
          } else {
            let start = 0;
            let length = 0;
            for (let k = i + 1; k < rip.length; k += 1) {
              if (k - i > jump[i]) {
                break;
              }
              if (typeof rip[k] === 'object' && rip[k].length > 1) {
                length = rip[k].length; // eslint-disable-line
              }
              let compare;
              if (length === 0) {
                compare = rip[k][0]; // eslint-disable-line
              } else {
                compare = rip[k][start];
              }
              console.log(rip[i], compare);
              const commonSubstrings = substrings.weigh([rip[i][0], compare], { minLength: 1 });
              let score;
              for (let j = 0; j < commonSubstrings.length; j += 1) {
                if (isVowel(commonSubstrings[j])) {
                  score = commonSubstrings[j];
                  break;
                }
              }
              if (score && score.weight > strictness) {
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
              }
              if (!dirtyBrush) {
                if (start !== length) {
                  start += 1;
                  k -= 1; // l33t hax00r
                }
              }
            }
          }
          if (dirtyBrush) {
            dirtyBrush = false;
            crayon += 1;
          }
        }
        resolve([coords, colors]);
      });
  });

export default parse;
