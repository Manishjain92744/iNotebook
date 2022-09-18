import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Abouts from './component/About';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';
import Login from './component/Login';
import Signup from './component/SignUp';

function App() {
  return (
    <>
    <NoteState> 
     <BrowserRouter>
     <Navbar/>
     <Alert  message="this is react course"/>
     <div className="container"> 
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<Abouts />} />
        <Route exact path="Login" element={<Login />} />
        <Route exact path="SignUp" element={<Signup />} />
    </Routes>
    </div>
  </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
