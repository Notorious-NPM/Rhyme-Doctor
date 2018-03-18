// accept mongoDB
import { PersonalRhyme } from '../mongoDB/index';

const createPersonalRhyme = (userID, word1, word2) => {
  // check if user already is in mongo collection
    // if yes, check if either word1 or word2 is in rhymes property
      // if yes, check if the other word is in array
        // if yes, dont do anything
        // if no, add to array
      // if no, add property and other word into array
    // if no, add user to collection

  const sickRhymes = new PersonalRhyme({
    userID,
    rhymes: {
      word1: [word2],
    },
  });

  sickRhymes.save(() => console.log('sickRhymes saved to PersonaRhymes table'));
};

const queryPersonalRhyme = (userID, word) => {
  console.log('reached queryPersonalRhyme');
};

export { createPersonalRhyme, queryPersonalRhyme };
