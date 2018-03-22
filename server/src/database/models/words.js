const Sequelize = require('sequelize');
const db = require('../');

const Words = db.define('words', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  word: { type: Sequelize.STRING, unique: true },
}, {
  underscored: true,
});

module.exports = Words;
