const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

const User = sequelize.define('users',{
     id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
     },
     name: Sequelize.STRING,
     email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
     },
     password: Sequelize.STRING,
     phone: {
      type:Sequelize.STRING,
      unique: true

     }


});

module.exports = User;