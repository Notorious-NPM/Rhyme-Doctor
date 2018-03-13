const Sequelize = require('sequelize');


const sequelize = new Sequelize('instagram', 'root', null, {
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
      timestamps: true
    }
  }
});

sequelize.authenticate().then(function() {
  console.log('You are connected to mysql Database on localhost');
}).catch(function(err) {
  console.log('Something went wrong, unable to connect to database: ', err);
});
