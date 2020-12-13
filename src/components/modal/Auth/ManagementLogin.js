import React from "react";
import { Link } from "react-router-dom";
import "./ManagementLogin.css";



const LoginPopUp = () => {
  return (
    <>
      <div className="modal_title">Teacher Login</div>
      <div className="login_text">WELCOME TO OUR WEBSITE. PLEASE LOGIN</div>
      <div className="input-wrapper">
        <input className="email-input" placeholder="Email" />
      </div>
      <div className="input-wrapper">
        <input className="email-input" placeholder="Password" type="password" />
      </div>
       <Link to="/check"> <button className="login_btn">Login</button></Link>
       <div className="management">forgot your password?</div>
    </>
  );
};

export default LoginPopUp;
