const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Friends = db.define('friends', {
  user_id: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  friend_id: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
}, {
  underscored: true,
});

User.belongsToMany(User, { as: 'user', through: Friends, foreignKey: 'user_id' });
User.belongsToMany(User, { as: 'friend', through: Friends, foreignKey: 'friend_id' });

module.exports = Friends;
