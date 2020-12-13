import React, {useState} from "react";
import Axios from "axios";
import "./SignUp.css";

const LoginPopUp = () => {

  const [useremaileReg, setUseremailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post('https://localhost3001/register',{
      useremail:useremaileReg,
      password:passwordReg,
    }).then((response)=>{
      console.log(response);
    });
  };
  
 
  return (
    <>
      <div className="modal_title">SignUp</div>
      <div className="login_text">WELCOME TO OUR WEBSITE. PLEASE SIGNUP</div>
      <div className="input-wrapper">
        <input className="name-input" placeholder="Name" />
      </div>
      <div className="input-wrapper">
        <input className="email-input" placeholder="Email"
        onChange={(e)=>{
          setUseremailReg(e.target.value);
        }} />
      </div>
      <div className="input-wrapper">
        <input
          className="password-input"
          placeholder="password"
          type="password"
          onChange={(e)=>{
            setPasswordReg(e.target.value);
          }}
        />
      </div>

      <button className="login_btn" onClick={register}>SignUp</button>
      <div className="forgot_password">Don’t have an account?</div>
    </>
  );
};

export default LoginPopUp;
