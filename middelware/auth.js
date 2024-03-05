const jwt = require('jsonwebtoken');
const User = require('../Modals/user');

exports.authentication = (req,res,next) => {
         
             try {
                   const token = req.header('Authorization');
                    
               const user = jwt.verify(token ,'251535vinay')
                     
                   console.log('>>>> User Verified :',user.userId)
                   User.findByPk(user.userId)
                   .then((user)=> {

                         req.user = user.id;
                        

                         next();
                   })
                   .catch((err) =>{
                        console.log(err)
                   })
                    
             } catch (error) {
                   console.log('Middleware error');
             }
   };

   