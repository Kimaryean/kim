import React from 'react';
import Header from '../header/Header'
import './Lab2.css';


const lab2 = [
    { id: 1, empty: false },
    { id: 2, empty: false },
    { id: 3, empty: false },
    { id: 4, empty: false },
    { id: 5, empty: false },
    { id: 6, empty: false },
    { id: 7, empty: false },
    { id: 8, empty: false },
]

const lab2_seat = [
    
   
   
    { id: 9, empty: false },
    { id: 10, empty: false },
    { id: 11, empty: false },
    { id: 12, empty: false },
    { id: 13, empty: false },
    { id: 14, empty: true },
    { id: 15, empty: true },
    { id: 16, empty: true },
]



const Lab2 = () => {

    // const Alert = () => {
    
    //     if(seatbtn.empty==false){
    //         alert("이미 선택된 좌석 입니다.");
    //     }
    
    return(
        <div>
            
            <Header  />
            <div className="lab2_title">LAB2</div>
            <div className="lab2_postition">
            {lab2.map((seatbtn1)=>(
                <button className="seat_btn" >{seatbtn1.id}</button>
            ))}
           
            </div>
            <div className="lab2_postition">
            {lab2_seat.map((seatbtn2)=>(
                <button className="seatbtn2">{seatbtn2.id}</button>
            ))}
           
            </div>
          

        </div>
    )
}
export default Lab2;