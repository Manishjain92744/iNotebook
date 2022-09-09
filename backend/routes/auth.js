const express=require('express');
const User = require('../models/User');
const router=express.Router();
const { body, validationResult } = require('express-validator');

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
   user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
    
   //  .then(user => res.json(user))
   //  .catch(err=>{console.log(err)
   // res.json({error:'please enter a unique value for email', message:err.message})})
   res.json(user)
   }
   catch(error){
    console.log(error.message);
    res.status(500).send("some error occured");
   }
})


module.exports = router