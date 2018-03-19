const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Follow = db.define('follow', {});

User.belongsToMany(User, { as: 'follower', through: Follow, foreignKey: 'followerID' });
User.belongsToMany(User, { as: 'followee', through: Follow, foreignKey: 'followeeID' });

module.exports = Follow;
