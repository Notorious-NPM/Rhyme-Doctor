const Sequelize = require('sequelize');
const { user, pass } = require('./config/config.js');

const db = new Sequelize('RhymeDoctor', user, pass, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  pool: {
    max: 4,
    min: 0,
    acquire: 30000,
    idle: 10000,
    handleDisconnects: true,
    define: {
      timestamps: true,
    },
  },
});

db.authenticate().then(() => {
  console.log('You are connected to mysql Database on localhost');
}).catch((err) => {
  console.log('Something went wrong, unable to connect to database: ', err);
});

module.exports = db;
