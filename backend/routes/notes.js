const express=require('express');
const router=express.Router();
const Note = require('../models/Note');
const fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


//ROUTE 1:fetch all notes of user  using : GET "/api/auth/fetchallnotes" . no login is required 
router.get('/fetchallnotes',fetchuser,async (req, res) => {
    try {
      const notes = await Note.find({user:req.user.id});
          res.json(notes)
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured");
       }
       
})
//ROUTE 2:fetch all notes of user  using : GET "/api/auth/addnote" .  login is required 
router.post('/addnote',fetchuser,[
    body('title','Enter name of title  ').isLength({min:4}),
    body('description','write  description of title  ').isLength({ min: 5 }),
],async (req, res) => { 
    try{
    const {title,description,tag }=req.body;
     // if there are error return bad requests and the  errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
       title , description,tag,user:req.user.id
    })
    const saveNote = await note.save()
        res.json(saveNote)
     }
     catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error occured");
       }
     
})
module.exports = router