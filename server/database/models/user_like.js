const Sequelize = require('sequelize');
const User = require('./user.js');
const Rap_Post = require('./rap_post.js');
const db = require('../');

const User_Like = db.define('user_like', {},
{
  underscored: true
})

User.belongsToMany(Rap_Post, { through: User_Like });
Rap_Post.belongsToMany(User, { through: User_Like });

module.exports = User_Like;