import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Abouts from './component/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    <NoteState> 
     <BrowserRouter>
     <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<Abouts />} />
    </Routes>
  </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
