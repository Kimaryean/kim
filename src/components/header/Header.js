import React, { useState } from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import Drop from '../../assets/drop.png';
import Logo from '../../assets/logo.png';
import PopUpTemplate from '../modal/Auth/SelectTemplate';

const Header = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
      setPopUp(!PopUp);
  }


    return (
      <div className="header-container">
         <img className="header_logo" src={Logo} alt="logo" />
            <div className="header-input--wrapper">
                <img src={Drop} className="drop_img" alt="drop" style={{ marginBottom: 10 }} onClick={CheckPopUp}/>
                <div className="search-input"><span className="search_text">Search</span></div>
            </div>
            <Link to="/"><button className="logout">Logout</button></Link>
        {PopUp ? <PopUpTemplate toggle={CheckPopUp} currentState="search"/> : null}
      </div>
    );
}
export default Header;