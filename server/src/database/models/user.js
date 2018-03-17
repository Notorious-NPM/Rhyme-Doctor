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
  like_count: { type: Sequelize.INTEGER, defaultValue: 0 },
}, {
  underscored: true,
});

// User.belongsTo(Rap_Post);

module.exports = User;
