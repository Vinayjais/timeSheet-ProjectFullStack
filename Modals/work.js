const Sequelize = require('sequelize');
const sequelize = require('../utilities/database');

const work = sequelize.define('works',{
      
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
     },
      projectName: Sequelize.STRING,
      date: Sequelize.STRING,
      todayWork: Sequelize.STRING,
      rating : Sequelize.STRING
      
});

module.exports = work;