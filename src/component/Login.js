import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credentials ,setCredentials]=useState({email:"",password:""});
    const navigate = useNavigate();

  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response =  await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({email:credentials.email,password:credentials.password}) 
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        // save the auth token and redirect
        localStorage.setItem('token',json.authtoken);
        navigate("/");
        props.showAlert("Logged in Successfully " ,"success");

      }
      else {
        props.showAlert("Invalid crendentials " ,"danger");
      }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <form  onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={credentials.email}
            name="email"
            onChange={onChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
           onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
          />
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
