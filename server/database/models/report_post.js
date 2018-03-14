const Sequelize = require('sequelize');
const User = require('./user.js');
const Rap_Post = require('./rap_post.js');
const db = require('../');

const Report_Post = db.define('report_post', {}, {
  underscored: true,
});

User.belongsToMany(Rap_Post, { through: Report_Post });
Rap_Post.belongsToMany(User, { through: Report_Post });

module.exports = Report_Post;
