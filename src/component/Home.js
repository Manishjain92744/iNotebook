import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
const Home = () => {
  const context = useContext(noteContext);
  const {notes , setNotes} = context;
  return (
    <div className="container my-3">
      <h1> Add a note </h1>
      <form> 
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        /> 
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <h1> your notes</h1>
      {notes.map((note)=>{
           return note.title ;
      })}
    </div>
  );
};

export default Home;
