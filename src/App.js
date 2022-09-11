import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home';
import Abouts from './component/About';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="About" element={<Abouts />} />
    </Routes>
  </BrowserRouter>
      {/* <Navbar/>
      <Home/>
     <h1>this is app page </h1> */}
    </>
  );
}

export default App;
