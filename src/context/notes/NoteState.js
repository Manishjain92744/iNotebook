import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props) =>{
  const host = "http://localhost:5000"
    const notesInitial = []
      const [notes,setNotes]=useState(notesInitial);
      //get all notes 
      const getNotes = async ()=>{
        console.log("fetching all note")
        //TODO API CALL 
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxY2JlYTc4MjQ0NDU5NjUyMDhmYjZlIn0sImlhdCI6MTY2MjgyODI2OH0.eprwFVgxJoNjS3QhcKTwSlAxwpBRdWvFtl94o6inVXs"
          },
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)
      }

      //Add notes
     const addNote = async (title,description,tag)=>{
     
      //TODO API CALL 
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxY2JlYTc4MjQ0NDU5NjUyMDhmYjZlIn0sImlhdCI6MTY2MjgyODI2OH0.eprwFVgxJoNjS3QhcKTwSlAxwpBRdWvFtl94o6inVXs"
        },
       
        body: JSON.stringify({title,description,tag}) 
      });
      const json = await response.json();
      console.log(json);
      const note = {
        "_id": "631f6d55c64794555568b5df9",
        "user": "631cbea7824445965208fb6e",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2022-09-12T17:33:09.578Z",
        "__v": 0
      }
      setNotes(notes.concat(note));

     }
      // delete notes 
      const deleteNote = async (id)=>{
        // TO DO API CALL
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: 'DELETE', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxY2JlYTc4MjQ0NDU5NjUyMDhmYjZlIn0sImlhdCI6MTY2MjgyODI2OH0.eprwFVgxJoNjS3QhcKTwSlAxwpBRdWvFtl94o6inVXs"
          }
         
        });
        const json = response.json();
        console.log("note is deleted " +json);

        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
        console.log("deleting the note with id "+id);
      
      }

      // edit notes
      const editNote =async (id,title,description,tag)=>{
        // api call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', 
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxY2JlYTc4MjQ0NDU5NjUyMDhmYjZlIn0sImlhdCI6MTY2MjgyODI2OH0.eprwFVgxJoNjS3QhcKTwSlAxwpBRdWvFtl94o6inVXs"
          },
         
          body: JSON.stringify({title,description,tag}) 
        });

        const json = await response.json();
        console.log(json);

       let newNotes = JSON.parse(JSON.stringify(notes))

        // logic to edit note
        for(let index=0;index<newNotes.length;index++)
        {
          const element = newNotes[index];
          if(element._id===id)
          {
            newNotes[index].title=title;
            newNotes[index].description=description;
            newNotes[index].tag=tag;
            break;
          }
         
        }
        setNotes(newNotes);
      }
   
  return (
    <NoteContext.Provider value={{notes , addNote ,deleteNote,editNote,getNotes}}>
        {props.children}
    </NoteContext.Provider>
   )

}

export default NoteState;