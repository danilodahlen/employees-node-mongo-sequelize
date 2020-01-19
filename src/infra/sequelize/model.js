const { Sequelize, sequelize }  = require('../../../config/database/sequelize');
const Model = Sequelize.Model;
const Op = Sequelize.Op;
const forceCreate = false;

class Position extends Model {}
Position.init({
    _id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    namePosition: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    percentCommission: {
      type: Sequelize.DECIMAL(16,2),
      allowNull: false
    }
},{ sequelize, modelName: 'Position' });


class Employee extends Model {}
Employee.init({
  _id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: { 
    type: Sequelize.STRING(150),
    allowNull: false
  },
  nickname: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  birthday: {
    type: Sequelize.DATE, 
    allowNull: false
  },
  salary: {
    type:Sequelize.DECIMAL(16,2),
    allowNull: false
  },
  namePosition: {
    type: Sequelize.STRING(150),
    allowNull: false,
  },
  zipcode: {
    type: Sequelize.STRING(10),
    allowNull: false
  },
  street: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  number: {
    type: Sequelize.STRING(5), 
    allowNull: false
  },
  city: {
    type: Sequelize.STRING(100), 
    allowNull: false
  },
  state: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
},{ sequelize, modelName: 'Employee' });

Position.sync({force: forceCreate, logging: false});
Employee.sync({force: forceCreate, logging: false});

module.exports = { Employee, Position, Op };
  

