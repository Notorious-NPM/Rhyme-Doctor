/* eslint-disable camelcase */

const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Rap_Post = db.define('rap_post', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.STRING,
  like_count: { type: Sequelize.INTEGER, defaultValue: 0 },
}, {
  underscored: true,
});

Rap_Post.belongsTo(User);
User.hasMany(Rap_Post);

module.exports = Rap_Post;
