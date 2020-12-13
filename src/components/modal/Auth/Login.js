import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Axios from 'axios';
import "./Login.css";
import validate from './validate';
import PopUpTemplate from "./Template";

const LoginPopUp = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };

  
const [useremail, setUseremaile] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus] = useState("");
const login = () => {
  Axios.post('https://localhost3001/login',{
    useremail:useremail,
    password:password,
  }).then((response)=>{
    if(response.data.message){
      setLoginStatus(response.data.message);
    }else{
      setLoginStatus(response.data[0].useremail);
    }
  });
};

  return (
    <>
      <div className="modal_title">Login</div>
      <div className="login_text">WELCOME TO OUR WEBSITE. PLEASE LOGIN</div>
      <div className="input-wrapper">
        <input
          className="email-input"
          type="text"
          placeholder="Email"
          onChange={(e)=>{
            setUseremaile(e.target.value);
          }}

        />
      </div> 
      <div className="input-wrapper">
        <input
          className="email-input"
          placeholder="Password"
          type="password"
          onChange={(e)=>{
            setPassword(e.target.value);
          }}
  
        />
      </div>

      <Link to="/lab1">
        <button className="login_btn" onClick={login}>Login</button>
      </Link>
      <div className="management" onClick={CheckPopUp}>
        관리 계정으로 로그인하기
      </div>

      {PopUp ? (
        <PopUpTemplate toggle={CheckPopUp} currentState="management" />
      ) : null}
    </>
  );
};

export default LoginPopUp;
