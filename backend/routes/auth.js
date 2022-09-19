const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser=require('../middleware/fetchuser');

const JWT_SECRET="manishjain25031999";

//ROUTE 1:create user using post "/api/auth/createuser" . no login is required 

router.post('/createuser',[
   body('name','Enter a valid name ').isLength({min:4}),
   body('email','Enter a valid email').isEmail(),
   body('password','password atleast must be 5 charactter').isLength({ min: 5 }),
],async (req, res) => {
   let success = false;
   // if there are error return bad requests and the  errors 
   // Finds the validation errors in this request and wraps them in an object with handy functions
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({success , errors: errors.array() });
   }
   try{ 
   // check whether the user with emial exists already 
   let user = await User.findOne({email:req.body.email});
   if(user){
      return res.status(400).json({success , error:"sorry already user with this email "})
   }
   const salt = await bcrypt.genSalt(10);
   const secpass = await bcrypt.hash(req.body.password, salt);
   user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secpass,
    })
    const data ={
      user:{
         id:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
     success =true
    res.json({success , authtoken})
   }
   catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error occured");
   }
})

//ROUTE 2:Login user using post "/api/auth/createuser" . no login is required 
router.post('/login',[
   body('email','Enter a valid email').isEmail(),
   body('password','Password can not be blank').exists(),
],async (req, res) => {
  let  success=false
      // if there are error return bad requests and the  errors 
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
const { email , password} = req.body;
try{
  let user = await User.findOne({email});
  if(!user){
   success=false;
   return res.status(400).json({success , error:"please try to login with correct credentials"});
  }
   const passwordCompare = await bcrypt.compare(password,user.password);
   if(!passwordCompare){
      success=false;
      return res.status(400).json({success , error:"please try to login with correct credentials"});
   }

   const data ={
      user:{
         id:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    success=true;
    res.json({success , authtoken})
 

} catch(error){
    console.log(error.message);
    res.status(500).send("Internal server Error");
}
})
//ROUTE 3:get user detail using middleware token using post request "/api/auth/getuser" . no login is required 
router.post('/getuser',fetchuser,async (req, res) => {
   try {
     const userId=req.user.id;
      const user = await User.findById(userId).select("-password")  
      res.send(user); 
   } catch(error){
      console.log(error.message);
      res.status(500).send("Internal server Error");
      
   }

})
module.exports = router