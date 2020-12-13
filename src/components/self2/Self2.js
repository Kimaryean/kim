import React from 'react';
import Header from '../header/Header'
import './Self2.css';


const self2_seat = [
    { id: 1, empty: false },
    { id: 2, empty: false },
    { id: 3, empty: false },
    { id: 4, empty: false },
    { id: 5, empty: false },
    { id: 6, empty: false },
    { id: 7, empty: false },
    { id: 8, empty: false },
    
]

const self2_seat2 = [
    
    { id: 9, empty: false },
    { id: 10, empty: false },
    { id: 11, empty: true },
    { id: 12, empty: true },
    { id: 13, empty: true },
    { id: 14, empty: false },
    { id: 15, empty: false },
    { id: 16, empty: true },
    
]

const self2_seat3 = [
    
    { id: 12, empty: false },
    { id: 13, empty: false },
    { id: 14, empty: true },
    { id: 15, empty: true },
    { id: 16, empty: true },
    { id: 17, empty: false },
    { id: 18, empty: false },
    { id: 19, empty: true },
    { id: 20, empty: true },
]




const Self2 = () => {

    // const Alert = () => {
    
    //     if(seatbtn.empty==false){
    //         alert("이미 선택된 좌석 입니다.");
    //     }
    
    return(
        <div>
          <Header />
          <div className="self2_title">자기주도 학습실 2</div>
            <div className="self2_postition">
            {self2_seat.map((seatbtn1)=>(
                <button className="seat_btn" >{seatbtn1.id}</button>
            ))}
           
            </div>
            <div className="self2_postition">
            {self2_seat2.map((seatbtn2)=>(
                <button className="seatbtn2">{seatbtn2.id}</button>
            ))}
           
            </div>
          
        </div>
    )
}
export default Self2;