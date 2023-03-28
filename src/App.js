//meus css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


//meus imports
import Home from "./firebase/pages/Home/Home";
import About from "./firebase/pages/About/About";
import Footer from "./components/Footer"
import Login from './firebase/pages/Login/Login';
import Register from './firebase/pages/Register/Register';
import Dashboard from "./firebase/pages/Dashoboard/Dashboard"

// meus contextos
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; 


// meus hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar"

  function App() {

    const [user, setUser] = useState(undefined)
    const {auth} = useAuthentication();
    console.log(auth)
    const loadingUser = user === undefined;

    useEffect(() => {
      onAuthStateChanged (auth, (user) => {
        setUser(user)
      });
    }, [auth]);


    if (loadingUser){
      return <p>Carregando...</p>
    }


    return (
      <div>
        <AuthProvider value={{user}}>
      <BrowserRouter>
    <Navbar/>
    <Home/>
      <div className='container'>
        <Routes>
        <Route path ="/" element={<Home/>}  />
        <Route path ="/About" element={<About />}/>
        <Route path ="/login" element={<Login />}/>
        <Route path ="/register" element={<Register/>}/>
        <Route path='/post/create' element={<createPost />} />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
      </div>
    );
  };

  export default App;
