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
  image: { type: Sequelize.STRING, defaultValue: 'https://res.cloudinary.com/dkwbeount/image/upload/v1521756599/xgpm9y5ym2k9tulsddqz.jpg' },
  bio: Sequelize.STRING(250),
  like_count: { type: Sequelize.INTEGER, defaultValue: 0 },
}, {
  underscored: true,
});

module.exports = User;
