import React from 'react';
import './SelectTemplate.css';
import SearchPopUp from './Search'

const SelectTemplate = ( props ) => {
    
    const ClosePopUp = () => {
        props.toggle(props.currentState);
    }
    
    const Modal = ( current ) => {
        switch(current) {
            case "search":
                return <SearchPopUp/>;
            case "":
                return ;
            default:
        }
    }
    return (
        <div className="modal_2" onClick={ClosePopUp}>
            <div className="modal_content_2" onClick={Event => Event.stopPropagation()}>
                {Modal(props.currentState)}
            </div>
        </div>
    );
}

export default SelectTemplate;