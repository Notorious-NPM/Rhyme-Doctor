const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Report_User = db.define('report_user', {
  reportee_id: Sequelize.INTEGER
},
{
  underscored: true
})

Report_User.belongsTo(User);

module.exports = Report_User;