import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props) =>{
    const notesInitial = [
        {
          "_id": "631cc903bc027f55e1a62e185",
          "user": "631cbea7824445965208fb6e",
          "title": "my title is added ",
          "description": "word hard to get something big ",
          "tag": "not personal",
          "date": "2022-09-10T17:27:31.938Z",
          "__v": 0
        },
        {
          "_id": "631f6d55c46794555568b5df9",
          "user": "631cbea7824445965208fb6e",
          "title": "my title is added again",
          "description": "word hard to get something big ",
          "tag": "not personal",
          "date": "2022-09-12T17:33:09.578Z",
          "__v": 0
        },
        {
            "_id": "631cc903bc074f55e1a62e185",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added ",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-10T17:27:31.938Z",
            "__v": 0
          },
          {
            "_id": "631f46d55c6794555568b5df9",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added again",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-12T17:33:09.578Z",
            "__v": 0
          } ,
          {
            "_id": "631cc9073bc07f55e1a62e185",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added ",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-10T17:27:31.938Z",
            "__v": 0
          },
          {
            "_id": "631f6d55c64794555568b5df9",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added again",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-12T17:33:09.578Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(notesInitial);

      //Add notes
     const addNote =(title,description,tag)=>{
      console.log("adding new note")
      //TODO API CALL 
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
      const deleteNote =()=>{
      
      }

      // edit notes
      const editNote =()=>{
      
      }
   
  return (
    <NoteContext.Provider value={{notes , addNote ,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
   )

}

export default NoteState;