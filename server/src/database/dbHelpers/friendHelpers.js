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

const queryFriendHelper = userID =>
  // Friends.create({
  //   userID: 8,
  //   friendID: 9,
  //   roomID: 'two',
  // });
  // Friends.create({
  //   userID: 9,
  //   friendID: 8,
  //   roomID: 'two',
  // });

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

export { addFriendHelper, queryFriendHelper, unFriendHelper };
