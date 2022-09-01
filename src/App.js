import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import {LoginContext} from './components/helper/Context';
function App() {
    const [loggedin,setLoggedin]=useState(false);
    return(
      <>
        <LoginContext.Provider value={[loggedin, setLoggedin]}>
          <Router>
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path='home' element={<Home/>}></Route>
              <Route path='register' element={<Register/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
            </Routes>
          </Router>
        </LoginContext.Provider>
      </>
    )
}

export default App;
