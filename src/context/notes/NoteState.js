import React from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState =(props) =>{
    const s1={
        "name":"manish",
        "class":"11A"
    }
    const [state ,setState]=useState(s1);
    const update =()=>{
        setTimeout(()=>{
         setState({
            "name":"bukllol",
            "class":"111b"
         });
        },1000)
    }
return (
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
)

}

export default NoteState;