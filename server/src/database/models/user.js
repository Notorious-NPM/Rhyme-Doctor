const Sequelize = require('sequelize');
const db = require('../');

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  password: Sequelize.STRING,
}, {
  underscored: true,
});

module.exports = User;
