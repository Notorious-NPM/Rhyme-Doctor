import Sequelize from 'sequelize';
import Friends from '../models/friends';

const { Op } = Sequelize;

const addFriendHelper = ({ user_id, friend_id }) => {
  return Friends.create({
    user_id,
    friend_id,
  });
};

const queryFriendHelper = ({ user_id }) => {
  user_id = Number(user_id);

  return Friends.findAll({
    where: {
      [Op.or]: [{ user_id }, { friend_id: user_id }],
    },
  });
};

const unFriendHelper = ({ user_id, friend_id }) => {
  Friends.destroy({
    where: {
      [Op.or]: [{ user_id, friend_id }, { user_id: friend_id, friend_id: user_id }],
    },
  });
};

export { addFriendHelper, queryFriendHelper, unFriendHelper };
