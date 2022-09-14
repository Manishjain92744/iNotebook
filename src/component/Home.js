import React from "react";
// import { useContext } from "react";
import Notes from "./Notes";
const Home = () => {
  return (
    <div className="container"> 
    <div className="container my-3">
      <h1> Add a note </h1>
      <form> 
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        /> 
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
       <Notes/>
    </div>
  );
};

export default Home;
