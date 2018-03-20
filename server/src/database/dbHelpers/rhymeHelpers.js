import Sequelize from 'sequelize';
import PersonalRhymes from '../models/personalRhymes';

const { Op } = Sequelize;

const createPersonalRhymes = (userID, word1, word2) =>
  PersonalRhymes.create({
    userID,
    word1,
    word2,
  });

const searchPersonalRhymes = (userID, word1, word2) =>
  PersonalRhymes.findOne({
    where: {
      userID,
      [Op.or]: [{ word1, word2 }, { word1: word2, word2: word1 }],
    },
  });

export { createPersonalRhymes, searchPersonalRhymes };
