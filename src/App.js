//meus css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


//meus imports
import Home from "./pages/Home/Home";
import Footer from "./components/Footer"
import About from "./pages/About/About";

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


import Dashboard from "./pages/Dashoboard/Dashboard"

// meus contextos
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'; 


// meus hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar"
import CreatePost from './pages/CreatePost/CreatePost';

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
      <div className='container'>
        <Routes>
        <Route path ="/" element={<Home/>}  />
        <Route path ="/About" element={<About />}/>
        <Route path ="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
        <Route path ="/register" element={ !user ? <Register /> : <Navigate to="/" />}/>
        <Route path='/post/create' element={<CreatePost />} />
        <Route path="/dashboard" element={user ? <Dashboard/>  : <Navigate to={'/login' } />}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </AuthProvider>
      </div>
    );
  };

  export default App;
