const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const loginrouter = require('./Router/login');
const sequelize = require('./utilities/database');
const User= require('./Modals/user')
const work = require('./Modals/work');
const heads = require('./Modals/head');


const app =  express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname , 'Public' ,' views')));
app.use(express.static(path.join(__dirname , 'Public' ,' js')));
app.use(loginrouter);

const port = 4000;


User.hasMany(work);
work.belongsTo(User);

sequelize
.sync()
.then(

    app.listen(port , ()=>{
        console.log(`Server Running on port ${port}`);
        console.log("DataBase Connected");
   })
)
.catch((err) =>{
    console.log('Database connection Error');
     throw new Error(err)
     
})
