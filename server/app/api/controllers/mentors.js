const mentorModel = require('../models/mentors');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = {

 create: function(req, res, next) {
  
  mentorModel.create({ name: req.body.name, email: req.body.email, password: req.body.password ,age:req.body.age,contactNumber:req.body.contactNumber,dateOfBirth:req.body.dateOfBirth}, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "Mentor added successfully!!!", data: result});
      
    });
 },

login: function(req, res, next) {
  mentorModel.findOne({email:req.body.email}, function(err, userInfo){
     if (err) {
      next(err);
     }else{
         if(bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
          res.json({status:"success", message: "Mentor found!!!", data:{user: userInfo, token:token}});
         }else{
          res.json({status:"error", message: "Invalid email/password!!!", data:null});
         }
    }
  });
 },
}
