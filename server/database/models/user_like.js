const Sequelize = require('sequelize');
const User = require('./user.js');
const Rap_Post = require('./rap_post.js');
const db = require('../');

const User_Like = db.define('user_like', {},
{
  underscored: true
})

User_Like.belongsTo(User);
User_Like.belongsTo(Rap_Post);
Rap_Post.hasMany(User_Like);
User.hasMany(User_Like);

module.exports = User_Like;