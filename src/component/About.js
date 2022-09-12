import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

const About = () => {
  const a= useContext(NoteContext)
  useEffect(()=>{
        a.update();
        // eslint-disable-next-line
  },[])
  return (
    <div>
      <h1>this is about {a.state.name} </h1>
    </div>
  )
}

export default About
