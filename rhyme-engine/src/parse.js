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
    if (score && score.weight > 1) {
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
        resolve(response.body);
      });
  });

const parse = (text, options) =>
  new Promise((resolve) => {
    const lines = text.split('\n');
    const APIcalls = [];
    const colors = [];
    const coords = [];
    const words = [];
    lines.forEach((line, x) => {
      while (/[^a-zA-Z]/.test(line.substring(line.length - 1))) {
        line = line.substring(0, line.length - 1); // eslint-disable-line
      }
      const wordsByComma = line.split(',');
      let accumLength = 0;
      wordsByComma.forEach((subline) => {
        let wordsInLine = subline.split(' ');
        wordsInLine = wordsInLine.filter(word => word !== '');
        colors.push(null);
        coords.push(`${x}, ${accumLength + (wordsInLine.length - 1)}`);
        accumLength += wordsInLine.length;
        words.push(wordsInLine[wordsInLine.length - 1]);
      });
      colors.push(null);
      coords.push('derp'); // Not a colorable coordinate. 'words' must be kept in step with 'colors' and 'coords'.
      words.push({ x, message: '<LINEBREAK>', pronunciation: false });
    });
    words.forEach((word) => {
      if (typeof word === 'string') {
        const normalized = word.replace(/[,.:;'"“”‘’()&?-]/g, ''); // Hyphen either at the beginning or end, or escaped, i.e. \-
        // console.log(normalized);
        APIcalls.push(API(normalized));
      } else {
        APIcalls.push(new Promise((resolution) => {
          // console.log(word);
          resolution(word);
        }));
      }
    });
    Promise.all(APIcalls)
      .then((data) => {
        const rip = data.map((response) => {
          try {
            const { pronunciation } = response;
            if (pronunciation && typeof pronunciation === 'object' && 'all' in pronunciation) {
              return pronunciation.all;
            } else if (pronunciation && (typeof pronunciation === 'object' && ('noun' in pronunciation || 'verb' in pronunciation))) {
              return (pronunciation.noun ? pronunciation.noun : '').concat(' '.concat(pronunciation.verb ? pronunciation.verb : ''));
            } else if (typeof pronunciation === 'string') {
              return pronunciation;
            } else if ('message' in response) {
              return response;
            }
            return fillString;
          } catch (error) {
            return fillString;
          }
        });
        let crayon = 0;
        let dirtyBrush = false;
        for (let i = 0; i < rip.length - 1; i += 1) {
          let lineBreakCount = 0;
          if (typeof rip[i] === 'object' && 'message' in rip[i]) {
            continue; // eslint-disable-line
          }
          for (let k = i + 1; k < rip.length; k += 1) {
            if (typeof rip[k] === 'object' && 'message' in rip[k]) {
              lineBreakCount += 1;
              continue; // eslint-disable-line
            }
            if (lineBreakCount > 2) {
              break;
            }
            console.log('COMPARE:', rip[i], rip[k]);
            const commonSubstrings = substrings.weigh([rip[i], rip[k]], { minLength: options.length }); // eslint-disable-line
            let score;
            for (let j = 0; j < commonSubstrings.length; j += 1) {
              if (isVowel(commonSubstrings[j])) {
                score = commonSubstrings[j];
                break;
              }
            }
            if (score && score.weight > options.weight) {
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
