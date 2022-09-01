import "./login.css";
import React, { useContext } from "react";
import { LoginContext } from "../../components/helper/Context";
import { useState } from "react";
import axios from "axios";
import {Navigate, Link,useNavigate } from "react-router-dom";
import Home from "../home/Home";

export default function Login() {
  const [email1,setEmail1]=useState('');
  const [password1,setPassword1]=useState('');
  const [loggedin, setLoggedin ] = useContext(LoginContext);
  
  const handleEmail=(value)=>{
    setEmail1(value);
  }
  const handlePassword=(value)=>{
    setPassword1(value);
  }
  const navigate = useNavigate();    
  const handleSave=()=>{
    
    const data = {
      email : email1,
      password: password1,
    };
    const url='http://localhost:62250/api/Login';
    if(email1=="" || password1==""){
      alert("Please fill the fields");
    }
    else{
      axios.post(url,data).then((result)=>{
        alert(result.data);
        if(result.data=="success"){
          setLoggedin(true);
          navigate('home');
        }
      }).catch((error)=>{
        setLoggedin(false);
        alert(error);
      })
    }
  }

  return (
    <>
      
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
              Connect with friends and the world around you on Lamasocial.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input required placeholder="Email"  className="loginInput" onChange={(e)=>handleEmail(e.target.value)}/>
              <input required placeholder="Password" type="password" className="loginInput" onChange={(e)=>handlePassword(e.target.value)}/>
              
              <button className="loginButton" onClick={()=> handleSave()}>Log In</button>
                
              <span className="loginForgot" >Forgot Password?</span>
              <button className="loginRegisterButton">
              <Link to="/register">Create a New Account</Link> 
              </button>
            </div>
          </div>
        </div>
      </div>
  </>
  );
}
