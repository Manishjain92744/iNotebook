const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET="manishjain25031999";

//create user using post "/api/auth/createuser" . no login is required 

router.post('/createuser',[
   body('name','Enter a valid name ').isLength({min:4}),
   body('email','Enter a valid email').isEmail(),
   body('password','password atleast must be 5 charactter').isLength({ min: 5 }),
],async (req, res) => {
   // if there are error return bad requests and the  errors 
   // Finds the validation errors in this request and wraps them in an object with handy functions
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   try{ 
   // check whether the user with emial exists already 
   let user = await User.findOne({email:req.body.email});
   if(user){
      return res.status(400).json({error:"sorry already user with this email "})
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

    res.json({authtoken})
   }
   catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
   }
})


module.exports = router