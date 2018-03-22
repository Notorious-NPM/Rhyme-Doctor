const Sequelize = require('sequelize');
const db = require('../');

const Rhymes = db.define('rhymes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  word1: Sequelize.STRING,
  word2: Sequelize.STRING,
}, {
  underscored: true,
});

module.exports = Rhymes;
