// accept mongoDB
import { PersonalRhyme } from '../mongoDB/index';


const queryPersonalRhyme = (userID, callback) => {
  console.log('reached queryPersonalRhyme');

  PersonalRhyme.find({ userID }).exec(callback);
};

const createPersonalRhyme = (userID, word1, word2) => {
  // check if user already is in mongo collection
    // if yes, check if either word1 or word2 is in rhymes property
      // if yes, check if the other word is in array
        // if yes, dont do anything
        // if no, add to array
      // if no, add property and other word into array
    // if no, add user to collection

  queryPersonalRhyme(userID, (result) => {
    console.log('create/query result: ', result);

    if (result.length === 0) {
      // create user/property and assign array
    }
    if (result.length > 0 && result.rhymes[word1]) {
      // check if word2 exists in array
    }
    if (result.length > 0 && result.rhymes[word2]) {
      // check if word1 exists in array
    }
    // otherwise do nothing
  });

  const sickRhymes = new PersonalRhyme({
    userID,
    rhymes: {
      word1: [word2],
    },
  });

  sickRhymes.save(() => console.log('sickRhymes saved to PersonaRhymes table'));
};

export { createPersonalRhyme, queryPersonalRhyme };
