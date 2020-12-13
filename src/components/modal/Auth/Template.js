import React from 'react';
import LoginPopUp from './Login';
import SignUpPopUp from './SignUp';
import ManagementPopUp from './ManagementLogin';
import './Template.css';

const Template = ( props ) => {
    
    const ClosePopUp = () => {
        props.toggle(props.currentState);
    }
    
    const Modal = ( current ) => {
        switch(current) {
            case "logout":
                return <LoginPopUp/>;
            case "signup":
                return <SignUpPopUp/>;
            case "management":
                return <ManagementPopUp/>;
            default:
        }
    }
    return (
        <div className="modal" onClick={ClosePopUp}>
            <div className="modal_content" onClick={Event => Event.stopPropagation()}>
                {Modal(props.currentState)}
            </div>
        </div>
    );
}

export default Template;