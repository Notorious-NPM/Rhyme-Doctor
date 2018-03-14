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
  I take seven emcees put 'em in a line
  And add seven more brothers who think they can rhyme
  Well, it'll take seven more before I go for mine
  Now that's twenty-one emcees ate up at the same time
  Easy does it, do it easy, that's what I'm doing
  No fessing, no messing around, no chewing
  No robbing or buying, biting, why borrow
  This slob will stop trying, fighting to follow
  My unusual style will confuse you a while
  If I was water, I'd flow in the Nile
  So many rhymes, you won't have time to go for yours
  Just because of applause, I have to pause
  Right after tonight is when I prepare
  To catch another sucker duck emcee out there
  'Cause my strategy has to be tragedy, catastrophe
  And after this you'll call me your majesty
  My melody`,
}, action) => state; // eslint-disable-line

const store = Redux.createStore(reducer);

export default store;
