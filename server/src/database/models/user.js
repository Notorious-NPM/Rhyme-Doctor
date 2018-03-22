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
  image: Sequelize.STRING,
  bio: Sequelize.STRING(250),
  like_count: { type: Sequelize.INTEGER, defaultValue: 0 },
}, {
  underscored: true,
});

module.exports = User;
