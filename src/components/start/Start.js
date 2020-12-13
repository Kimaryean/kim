import React, { useState } from 'react';
import './Start.css';
import logo from '../../assets/logo.png';
import PopUpTemplate from '../modal/Auth/Template';
import SignUpPopUp from '../modal/Auth/Template';
import Arrow from '../../assets/arrow.png';
import start from '../../assets/start.png';
import Background2 from '../../assets/background2.png';
import Background from '../../assets/background.png';

const Start = () => {
    const [PopUp, setPopUp] = useState(false);
    const [SignPopUp, setSignPopUp] = useState(false);

    const CheckPopUp = () => {
        setPopUp(!PopUp);
    }

    const SignCheckPopUp = () => {
        setSignPopUp(!SignPopUp);
    }


    return (
        <div>
            <div className="imgs">
                <img src={Background} alt="background" className="backgorund" />
                <img src={start} alt="start" className="start_img" />
            </div>
            
                <div className="title">
                    <p>Dormitory</p>
                    <p>Laptop</p>
                    <p>Management</p>
                </div>
                 
                <p className="sub_title">WEB Service</p>
            <button className="login" onClick={CheckPopUp}>Login</button>
            <button className="signup" onClick={SignCheckPopUp}>SignUp</button>
            <img src={Background2} alt="back2" className="background2" style={{height:350}} />

            
            {PopUp ? <PopUpTemplate toggle={CheckPopUp} currentState="logout"/> : null}
            {SignPopUp ? <SignUpPopUp toggle={SignCheckPopUp} currentState="signup"/> : null}
            
           
        </div>

    );
}

export default Start;