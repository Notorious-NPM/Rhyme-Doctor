import Sequelize from 'sequelize';
import Friends from '../models/friends';

const addFriendHelper = ({ user_id, friend_id }) => {
  Friends.create({
    user_id: user_id,
    friend_id: friend_id
  })
    .then( result => res.status(201).send(result.dataValues))
    .catch( err => console.log('addFriend error: ', err));
};

const unFriendHelper = ({ user_id, friend_id }) => {
  Friends.destroy({
    where: { user_id: user_id, friend_id: friend_id }
  })
    .then( result => res.status(200).send('deleted'))
    .catch( err => res.status(200).send(err));
};

export { addFriendHelper, unFriendHelper };
