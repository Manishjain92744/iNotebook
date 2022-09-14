import React from 'react'
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";
import Noteitem from './Noteitem';


const Notes = () => {
    const context = useContext(noteContext);
  const {notes , setNotes} = context;
  return (
    <div className="row my-3 ">
      <h1> your notes</h1>
      {notes.map((note)=>{
           return <Noteitem key={note._id} note={note}/>
      })}
    </div>
  )
}

export default Notes
