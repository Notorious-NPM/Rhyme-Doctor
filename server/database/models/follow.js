const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Follow = db.define('follow', {
  follow_id: Sequelize.INTEGER
},
{
  underscored: true
})

Follow.belongsTo(User);

module.exports = Follow;