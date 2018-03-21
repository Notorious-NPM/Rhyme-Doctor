/* eslint-disable no-param-reassign */
// https://redux.js.org/#the-gist

import * as Redux from 'redux';

const reducer = (state = {
  session: false,
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
  /* '0, 3': 'red',
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
  '11, 12': 'firebrick', */
}, action) => {
  switch (action.type) {
    case 'wipeboard':
      state = {
        text: state.text,
        session: state.session,
      };
      return state;
    case 'sessionlogin':
      state.session = true;
      state.user = action.body.username;
      return state;
    case 'sessionlogout':
      delete state.user;
      state.session = false;
      return state;
    case 'straighthighlight':
      state[action.body.coord] = action.body.color;
      return state;
    case 'highlight':
      state[`${action.body.x}, ${action.body.y}`] = action.body.color;
      return state;
    case 'unhighlight':
      delete state[`${action.body.x}, ${action.body.y}`];
      return state;
    case 'changetext':
      state.text = action.body.text;
      return state;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;
