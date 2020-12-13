import React from 'react';
import Header from '../header/Header'
import './Creative.css';


const creative_seat = [
    { id: 1, empty: false },
    { id: 2, empty: false },
    { id: 3, empty: false },
    { id: 4, empty: false },
    { id: 5, empty: false },
    { id: 6, empty: false },
    { id: 7, empty: false },
    { id: 8, empty: false },
    { id: 9, empty: false },
    { id: 10, empty: false },
   
]

const creative_seat2 = [
    
    
    { id: 11, empty: false },
    { id: 12, empty: false },
    { id: 13, empty: false },
    { id: 14, empty: true },
    { id: 15, empty: true },
    { id: 16, empty: false },
    { id: 17, empty: false },
    { id: 18, empty: false },
    { id: 19, empty: false },
    { id: 20, empty: false },
]
const creative_seat3 = [
    
  
    { id: 21, empty: false },
    { id: 22, empty: true },
    { id: 23, empty: true },
    { id: 24, empty: false },
    { id: 25, empty: true },
    { id: 26, empty: true },
    { id: 27, empty: false },
    { id: 28, empty: true },
    { id: 29, empty: true },
    { id: 30, empty: true },

]



const Creative = () => {

    // const Alert = () => {
    
    //     if(seatbtn.empty==false){
    //         alert("이미 선택된 좌석 입니다.");
    //     }
    
    return(
        <div>
            
            <Header  />
            <div className="creative_title">창의공작실</div>
            <div className="creative_postition">
            {creative_seat.map((creative)=>(
                <button className="creative_btn" >{creative.id}</button>
            ))}
           
            </div>
            <div className="creative_postition">
            {creative_seat2.map((creative)=>(
                <button className="creative_btn">{creative.id}</button>
            ))}
            </div>
            <div className="creative_postition">
            {creative_seat3.map((creative)=>(
                <button className="creative_btn">{creative.id}</button>
            ))}
            </div>

        </div>
    )
}
export default Creative;