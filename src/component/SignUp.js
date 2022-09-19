import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUp = (props) => {
  const [credentials ,setCredentials]=useState({name: "" , email: "" , password: "" , cpassword: ""});
  let navigate = useNavigate();

const handleSubmit =  async (e) => {
  e.preventDefault();
  const {name,email,password} = credentials;
  const response =  await fetch("http://localhost:5000/api/auth/createuser", {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({name,email,password}) 
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      // save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/");
      props.showAlert("Account created Successfully " ,"success");

    }
    else {
      props.showAlert("Invalid Details " ,"danger");
    }
};

const onChange = (e) => {
  setCredentials({ ...credentials, [e.target.name]: e.target.value });
};
  return (
    <div className="container my-4">
       <h2> Create an account  to use Notebook</h2>
    <form  onSubmit={handleSubmit}>
    <div className="form-group my-2">
        <label htmlFor="exampleInputEmail1"> Name </label>
        <input
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          name="name"
          onChange={onChange}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="exampleInputEmail1">Email </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
         onChange={onChange}
          type="password"
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          minLength={5} required
        />
      </div>
      <div className="form-group my-2">
        <label htmlFor="exampleInputPassword1">Confirm Password</label>
        <input
         onChange={onChange}
          type="password"
          className="form-control"
          id="cpassword"
          name="cpassword"
          placeholder="Confirm Password"
          minLength={5} required
        />
      </div>
      <button type="submit" className="btn btn-primary my-2">
        Submit
      </button>
    </form>
  </div>
  )
}

export default SignUp
