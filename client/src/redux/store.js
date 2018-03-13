// https://redux.js.org/#the-gist

import * as Redux from 'redux';

console.log(Redux);

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'upvote':
      return state + 1;
    case 'downvote':
      return state - 1;
    default:
      return state;
  }
};

const store = Redux.createStore(counter);
store.subscribe(() => {
  console.log(store.getState()); // eslint-disable-line
});

export default store;
