/* eslint-disable no-param-reassign */
// https://redux.js.org/#the-gist

import * as Redux from 'redux';

const reducer = (state = {
  session: false,
  text: `Circulate us in the vein, set to ride the cracks on your brain
  Like a novocaine, I train, to ease any pain
  Yeah, get your wig loose, I relieve tension
  The path to my lesson, is the highway to heaven
  Plus, what a rush, catch another one flush
  Now you got a crush, making dames wanna blush
  I stomp out your campfire, liar, retire`,
  strictness: 'Strict',
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
      state[`${action.body.x}, ${action.body.y}`] = action.body.color;
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
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

export default store;
