//meus css
import './App.css';

//meus imports
import {BrowserRouter, Routes, Route, Navigate, Router} from 'react-router-dom';
import Home from "./firebase/pages/Home/Home";
import About from "./firebase/pages/About/About";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <div className='container'>
      <Routes>
      <Route path ="/" element={<Home />}  />
      <Route path ="/About" element={<About />}/>
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
