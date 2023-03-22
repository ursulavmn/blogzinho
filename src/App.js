//meus css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


//meus imports
import {BrowserRouter, Routes, Route, Navigate, Router} from 'react-router-dom';
import Home from "./firebase/pages/Home/Home";
import About from "./firebase/pages/About/About";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from './firebase/pages/Login/Login';
import Register from './firebase/pages/Register/Register';


function App() {
  return (
    <div>
     <BrowserRouter>
   <Navbar/>
   <Home/>
     <div className='container'>
      <Routes>
      <Route path ="/" element={<Home/>}  />
      <Route path ="/About" element={<About />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/register" element={<Register/>}/>
      </Routes>
     </div>
     <Footer/>
     </BrowserRouter>
    </div>
  );
};

export default App;
