// https://redux.js.org/#the-gist

import * as Redux from 'redux';

const reducer = (state = {
  text: `I'm not a regular competitor, first rhyme editor
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
  A hard time, sip your juice and watch a smooth poet
`,
  '0, 3': 'red',
  '0, 4': 'red',
  '0, 7': 'red',
  '1, 5': 'red',
  '1, 6': 'red',
  '2, 8': 'blue',
  '3, 9': 'blue',
  '4, 9': 'green',
  '5, 11': 'green',
  '6, 5': 'brown',
  '6, 9': 'brown',
  '7, 12': 'brown',
  '8, 4': 'orange',
  '8, 8': 'orange',
  '9, 10': 'orange',
  '9, 11': 'orange',
  '10, 5': 'firebrick',
  '10, 6': 'firebrick',
  '10, 12': 'firebrick',
  '11, 12': 'firebrick',
}, action) => state; // eslint-disable-line

const store = Redux.createStore(reducer);

export default store;
