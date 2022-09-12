import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props) =>{
    const notesinitial = [
        {
          "_id": "631cc903bc07f55e1a62e185",
          "user": "631cbea7824445965208fb6e",
          "title": "my title is added ",
          "description": "word hard to get something big ",
          "tag": "not personal",
          "date": "2022-09-10T17:27:31.938Z",
          "__v": 0
        },
        {
          "_id": "631f6d55c6794555568b5df9",
          "user": "631cbea7824445965208fb6e",
          "title": "my title is added again",
          "description": "word hard to get something big ",
          "tag": "not personal",
          "date": "2022-09-12T17:33:09.578Z",
          "__v": 0
        },
        {
            "_id": "631cc903bc07f55e1a62e185",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added ",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-10T17:27:31.938Z",
            "__v": 0
          },
          {
            "_id": "631f6d55c6794555568b5df9",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added again",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-12T17:33:09.578Z",
            "__v": 0
          } ,
          {
            "_id": "631cc903bc07f55e1a62e185",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added ",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-10T17:27:31.938Z",
            "__v": 0
          },
          {
            "_id": "631f6d55c6794555568b5df9",
            "user": "631cbea7824445965208fb6e",
            "title": "my title is added again",
            "description": "word hard to get something big ",
            "tag": "not personal",
            "date": "2022-09-12T17:33:09.578Z",
            "__v": 0
          }
      ]
      const [notes,setNotes]=useState(notesinitial);
   
return (
    <NoteContext.Provider value={{notes , setNotes}}>
        {props.children}
    </NoteContext.Provider>
)

}

export default NoteState;