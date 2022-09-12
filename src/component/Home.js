import React from "react";
// import { useContext } from "react";
import Notes from "./Notes";
const Home = () => {
  return (
    <div className="container"> 
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
    </div>
       <Notes/>
    </div>
  );
};

export default Home;