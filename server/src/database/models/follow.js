const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Follow = db.define('follow', {
  followerID: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  followeeID: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
}, {
  underscored: true,
});

User.belongsToMany(User, { as: 'follower', through: Follow, foreignKey: 'followerID' });
User.belongsToMany(User, { as: 'followee', through: Follow, foreignKey: 'followeeID' });

module.exports = Follow;
