const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');


const heads = sequelize.define('heads',{
     id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
     },
     adminName: Sequelize.STRING,
     dep: Sequelize.STRING,
     email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
     },
     password: Sequelize.STRING,
   


});

module.exports = heads;