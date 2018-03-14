const Sequelize = require('sequelize');
const User = require('./user.js');
const db = require('../');

const Report_User = db.define('report_user', {
  reporter_id: { 
    type: Sequelize.INTEGER,
    foreignKey: true
  },
  reportee_id: {
    type: Sequelize.INTEGER,
    foreignKey: true
  }
},

{
  underscored: true
})

User.belongsToMany(User, { as: 'reporter', through: Report_User, foreignKey: 'reporter_id' });
User.belongsToMany(User, { as: 'reportee', through: Report_User, foreignKey: 'reportee_id' });

module.exports = Report_User;