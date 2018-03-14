const Sequelize = require('sequelize');
const User = require('./user.js');
const Rap_Post = require('./rap_post.js');
const db = require('../');

const Comment = db.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: Sequelize.STRING,
}, {
  underscored: true,
});

Comment.belongsTo(Rap_Post);
Comment.belongsTo(User);
Rap_Post.hasMany(Comment);
User.hasMany(Comment);

module.exports = Comment;
