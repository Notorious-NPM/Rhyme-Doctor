const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Friends = db.define('friends', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  friendID: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  roomID: {
    type: Sequelize.STRING,
  },
}, {
  underscored: true,
});

User.belongsToMany(User, { as: 'user', through: Friends, foreignKey: 'userID' });
User.belongsToMany(User, { as: 'friend', through: Friends, foreignKey: 'friendID' });

module.exports = Friends;
