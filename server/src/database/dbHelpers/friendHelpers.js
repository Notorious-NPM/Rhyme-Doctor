import Sequelize from 'sequelize';
import Friends from '../models/friends';
import User from '../models/user';

const { Op } = Sequelize;

const addFriendHelper = (userID, friendID) => {
  const roomID = (Math.random() * 100000).toString();

  Friends.create({
    userID: friendID,
    friendID: userID,
    roomID,
  });

  return Friends.create({
    userID,
    friendID,
    roomID,
  });
};

const checkIfFriends = (userID, username) =>
  User.findOne({
    where: {
      id: userID,
    },
    include: [{
      model: User,
      as: 'friend',
      where: {
        name: username,
      },
    }],
  });

const queryFriendHelper = userID =>
  User.findOne({
    where: {
      id: userID,
    },
    include: [{
      model: User,
      as: 'friend',
    }],
  });

const unFriendHelper = (userID, friendID) => {
  Friends.destroy({
    where: {
      [Op.or]: [{ userID, friendID }, { userID: friendID, friendID: userID }],
    },
  });
};

export { addFriendHelper, queryFriendHelper, unFriendHelper, checkIfFriends };
