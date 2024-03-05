const path = require('path');
const bcrypt = require('bcrypt');
const User = require('../Modals/user');
const jwt = require('jsonwebtoken');
exports.getLogin = (req, res , next) =>{

     res.sendFile(path.join(__dirname , '../' ,'Public', 'views' , 'login.html'));
}

exports.GetSignUp = ( req,res,next) =>{
    res.sendFile(path.join(__dirname , '../' ,'Public', 'views' , 'singUp.html'));

}


exports.postUserData =(req,res,next)=>{
    const user = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
    };

    try {
            bcrypt.hash(user.password,12, (error,hash)=>{
                    User.create({
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            password: hash
                    })
                    .then(()=>{
                        console.log('New User Comer');
                             res.send('User Register Succesfully')
                            
                    })
                    .catch((err) =>{
                           
                            res.status(200).send("Email Already exist, use different email");
            
                            
                    });
            
            })
      
    } catch (error) {
            console.log(error);
    }

  
 
};


exports.postValidiateUser = async (req,res,next) =>{
  
    const email = req.body.email;
    const password = req.body.password;

    function generateWebToken(id){
    return jwt.sign({userId :id},'251535vinay');
    };

    try {
     await  User.findOne({where:{ email: email}})
        .then((user) =>{

             bcrypt.compare(password, user.password,(err,result)=>{
                if( result === true){
                    res.status(200).send({success : true , Message: "Login Successfull",token:generateWebToken(user.id)});
                }
                else{
                    res.status(500).json({success : false , Message: "You entered wrong password."});
    
                }
             })
           
        })
        .catch((err)=>{
            res.send({message:'User Not Found 404'});
            throw new Error(err);
        })

    } catch (error) {
        console.log(error)
    }

    
};
