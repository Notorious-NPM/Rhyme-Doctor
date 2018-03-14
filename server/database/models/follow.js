const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Follow = db.define('follow', {
  follower_id: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
  followee_id: {
    type: Sequelize.INTEGER,
    foreignKey: true,
  },
}, {
  underscored: true,
});

User.belongsToMany(User, { as: 'follower', through: Follow, foreignKey: 'follower_id' });
User.belongsToMany(User, { as: 'followee', through: Follow, foreignKey: 'followee_id' });

module.exports = Follow;
