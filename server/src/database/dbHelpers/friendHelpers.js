import Sequelize from 'sequelize';
import Friends from '../models/friends';

const { Op } = Sequelize;

const addFriendHelper = ({ userID, friendID }) =>
  Friends.create({
    userID,
    friendID,
  });

const queryFriendHelper = ({ userID }) => {
  userID = Number(userID); // eslint-disable-line

  return Friends.findAll({
    where: {
      [Op.or]: [{ userID }, { friendID: userID }],
    },
  });
};

const unFriendHelper = ({ userID, friendID }) => {
  Friends.destroy({
    where: {
      [Op.or]: [{ userID, friendID }, { userID: friendID, friendID: userID }],
    },
  });
};

export { addFriendHelper, queryFriendHelper, unFriendHelper };
