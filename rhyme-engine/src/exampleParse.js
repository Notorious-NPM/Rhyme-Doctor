import unirest from 'unirest';
import substrings from 'common-substrings';
import API_KEY from './config';

const fillString = '#';
// https://en.wikipedia.org/wiki/List_of_Crayola_crayon_colors#Standard_colors
// https://en.wikipedia.org/wiki/List_of_Crayola_colored_pencil_colors
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

const lyrics =

`I'm not a regular competitor, first rhyme editor
Melody arranger, poet et cetera
Extra events, the grand finale like bonus
I am the man they call the microphonist
With wisdom, which means wise words being spoken
Too many at one time, watch the mic start smoking
I came to express the rap I manifest
Stand in my way, and I'll veto all the word's protest
Emcees that wanna be best, they're gonna
Be dissed if they don't get from in front of
All they can go get is me a glass of Moet
A hard time, sip your juice and watch a smooth poet`;

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
          dirtyBrush = false;
          crayon += 1;
        }
      }
      console.log(words);
      console.log(colors);
    });
};

parse(lyrics);