const Sequelize = require('sequelize');

const sequelize = new Sequelize('timesheet','root','password',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
