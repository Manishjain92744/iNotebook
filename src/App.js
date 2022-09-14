import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Abouts from './component/About';
import NoteState from './context/notes/NoteState';
import Alert from './component/Alert';

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
    </Routes>
    </div>
  </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
