const Sequelize = require('sequelize');
const db = require('../');

const PersonalRhymes = db.define('personalRhymes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userID: Sequelize.INTEGER,
  word1: Sequelize.STRING,
  word2: Sequelize.STRING,
}, {
  underscored: true,
});

module.exports = PersonalRhymes;
