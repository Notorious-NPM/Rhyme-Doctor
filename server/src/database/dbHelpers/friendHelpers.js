import Sequelize from 'sequelize';
import Friends from '../models/friends';

const { Op } = Sequelize;

const addFriendHelper = ({ userID, friendID }) => {
  const roomID = (Math.random() * 100000).toString();

  return Friends.create({
    userID,
    friendID,
    roomID,
  });
};

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
