const express=require('express');
const router=express.Router();
const Note = require('../models/Note');
const fetchuser=require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');


//ROUTE 1:fetch all notes of user  using : GET "/api/notes/fetchallnotes" . no login is required 
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
//ROUTE 2:fetch all notes of user  using : GET "/api/notes/addnote" .  login is required 
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

//ROUTE 3:update notes of user  using : PUT "/api/notes/updatenote" .  login is required 
router.put('/updatenote/:id',fetchuser,async (req, res) => { 
  const {title,description,tag}=req.body;
  //create new note
  try {
  const newNote={};
  if(title){newNote.title=title};
  if(description){newNote.description=description};
  if(tag){newNote.tag=tag};

  let note = await Note.findById(req.params.id);
  if(!note){return res.status(404).send("not found")}

  if(note.user.toString() !== req.user.id)
  {
    return res.status(401).send("not allowed")
  }

  note = await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
  res.json({note})
} catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error occured");
 }
  
})

//ROUTE 4:DELETE notes of user  using : DELETE "/api/notes/deletenote" .  login is required 
router.delete('/deletenote/:id',fetchuser,async (req, res) => { 
  try {
  // checking note is present or not 
  let note = await Note.findById(req.params.id);
  if(!note){return res.status(404).send("not found")}

  // veerifying user id and notes id
  if(note.user.toString() !== req.user.id)
  {
    return res.status(401).send("not allowed")
  }

  note = await Note.findByIdAndDelete(req.params.id)
  res.json({"Sucess":"sucessfully note is deleted", note : note });
} catch(error){
  console.log(error.message);
  res.status(500).send("Internal server error occured");
 }
  
})
module.exports = router