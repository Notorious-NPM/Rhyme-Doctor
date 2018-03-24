/* eslint-disable no-param-reassign */
// https://redux.js.org/#the-gist

import * as Redux from 'redux';

const browserSave = (state) => {
  localStorage.setItem(state.user ? state.user : 'anonymous' /* ugh */, JSON.stringify(state));
};

const reducer = (state = {
  session: false,
  text: `C.L. Smooth:

  Circulate us in the vein, set to ride the cracks on your brain
  Like a novocaine, I train, to ease any pain
  Yeah, get your wig loose, I relieve tension
  The path to my lesson, is the highway to heaven
  Plus, what a rush, catch another one flush
  Now you got a crush, making dames wanna blush
  I stomp out your campfire, liar, retire

  Example:

  HRLA twenty, gave me plenty, of stuff to learn
  I spurn, heavy, messy, lyrics, template strings and back ticks
  My rhymes are so sick, I'm like John Wick, ladle the sauce, extra thick
  These words will stick, colorful lyrics, I used the same word, like Nick`,
  strictness: 'Strict',
  color: 'red',
}, action) => {
  console.log(JSON.parse(localStorage.getItem(state.user)));
  console.log(state.user);
  switch (action.type) {
    case 'wipeboard':
      state = {
        text: state.text,
        session: state.session,
        user: state.user,
        strictness: state.strictness,
      };
      browserSave(state);
      return state;
    case 'sessionlogin':
      state.session = true;
      state.user = action.body.username;
      // browserSave(state);
      return state;
    case 'sessionlogout':
      delete state.user;
      state.session = false;
      // browserSave(state);
      return state;
    case 'straighthighlight':
      state[action.body.coord] = action.body.color;
      browserSave(state);
      return state;
    case 'highlight':
      state[`${action.body.x}, ${action.body.y}`] = state.color;
      browserSave(state);
      return state;
    case 'unhighlight':
      delete state[`${action.body.x}, ${action.body.y}`];
      browserSave(state);
      return state;
    case 'changetext':
      state.text = action.body.text;
      browserSave(state);
      return state;
    case 'changestrictness':
      state.strictness = action.body.strictness;
      browserSave(state);
      return state;
    case 'changecolor':
      state.color = action.body.color;
      browserSave(state);
      return state;
    case 'browserrestore':
      Object.assign(state, JSON.parse(localStorage.getItem(action.body.username)));
      browserSave(state);
      return state;
    default:
      browserSave(state); // lol
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;
