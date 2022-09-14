import React from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useEffect } from 'react';


const Notes = () => {
    const context = useContext(noteContext);
  const {notes ,getNotes} = context;
  useEffect (()=>{
    getNotes();
  },[] )
  return (
    <> 
    <AddNote />
    <div className="row my-3 ">
      <h1> your notes</h1>
      {notes.map((note)=>{
           return <Noteitem key={note._id} note={note}/>
      })}
    </div>
    </>
  )
}

export default Notes
