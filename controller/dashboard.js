
 const path = require('path');

 const TodayWork = require('../Modals/work');
const { use } = require('../Router/login');
const { json } = require('body-parser');
const { get } = require('http');
exports.getDashBoard =( req,res,next) =>{
    res.sendFile(path.join(__dirname , '../' ,'Public', 'views' , 'dashboard.html'));


}
exports.workSubmittedSuccess = (req,res,next)=>{
    res.sendFile(path.join(__dirname , '../' ,'Public', 'views' , 'succes.html')); 
}

exports.submitwork = ( req,res, next) =>{
     
     const projectName = req.body.projectName;
     const date = req.body.date;
     const work = req.body.work;
     const user = req.user;

      TodayWork.create({
         projectName : projectName,
         date : date, 
         todayWork : work,
         userId :user


      })
      .then((result)=>{
        res.send(`Work Submitted for Project name ${projectName} `)
        
      })
      .catch((err)=>{
          throw new Error(err);
      })

       
}

exports.getData =(req,res,next) =>{
     
    
    TodayWork.findAll()
    .then((result)=>[
        res.status(200).send({ works : result})

    ])
    .catch((err)=>{
        throw new Error(err);

    })
    
}

exports.getAdminpage = (req,res,next) =>{
    res.sendFile(path.join(__dirname , '../' ,'Public', 'views' , 'admin.html'));
     
}

exports.submitRate = async (req, res,next) =>{

     const projectId = req.body.projectId;
     const rate = req.body.rating;
   
   await TodayWork.findOne({where:{id: projectId}})
    .then((result)=>{
         result.rating =rate;

          result.save();
        res.send(`Rating Submitted for Project Id ${ projectId}`)
    })
    .catch((err)=>{
        console.log('submint rate err');
        throw new Error(err);

    })
    
    

     
      
}