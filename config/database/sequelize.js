const Sequelize = require('sequelize');

const sequelize = new Sequelize('DB_EMPLOYEES', 'sa', '123456', {
  dialect: 'mssql',
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1,
      logging: true 
    }
  }
});

module.exports = { 
  Sequelize,
  sequelize
}