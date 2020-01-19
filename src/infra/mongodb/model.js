const mongoose = require('../../../config/database/mongodb');

const positionSchema = new mongoose.Schema({
    namePosition: String,
    percentCommission: Number
});

const Position = mongoose.model('Position', positionSchema);


const employeeSchema = new mongoose.Schema({
    fullname: String,
    nickname: String,
    birthday: Date,
    salary: Number,
    namePosition: String,
    zipcode: String,
    street: String,
    number: String,
    city: String,
    state: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = { Employee, Position }