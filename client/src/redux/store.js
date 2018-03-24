/* eslint-disable no-param-reassign */
// https://redux.js.org/#the-gist

import * as Redux from 'redux';

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
  switch (action.type) {
    case 'wipeboard':
      state = {
        text: state.text,
        session: state.session,
        strictness: state.strictness,
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
      state[`${action.body.x}, ${action.body.y}`] = state.color;
      return state;
    case 'unhighlight':
      delete state[`${action.body.x}, ${action.body.y}`];
      return state;
    case 'changetext':
      state.text = action.body.text;
      return state;
    case 'changestrictness':
      state.strictness = action.body.strictness;
      return state;
    case 'changecolor':
      state.color = action.body.color;
      return state;
    case 'browserrestore':
      Object.assign(state, action.body);
      return state;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;
