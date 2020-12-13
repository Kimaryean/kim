import React from 'react';
import Header from '../header/Header'
import './Self1.css';



const self1_seat = [
    { id: 1, empty: false },
    { id: 2, empty: false },
    { id: 3, empty: false },
    { id: 4, empty: false },
    { id: 5, empty: false },
    { id: 6, empty: false },
    { id: 7, empty: false },
   
]

const self1_seat2= [
    
   
    { id: 8, empty: false },
    { id: 9, empty: false },
    { id: 10, empty: false },
    { id: 11, empty: false },
    { id: 12, empty: false },
    { id: 13, empty: false },
    { id: 14, empty: true },
    { id: 15, empty: true }
]



const Self1 = () => {

    // const Alert = () => {
    
    //     if(seatbtn.empty==false){
    //         alert("이미 선택된 좌석 입니다.");
    //     }
    
    return(
        <div>
            
            <Header  />
            <div className="self1_title">자기주도 학습실 1</div>
            <div className="postition">
            {self1_seat.map((seatbtn1)=>(
                <button className="seat_btn" >{seatbtn1.id}</button>
            ))}
           
            </div>
            <div className="postition2">
            {self1_seat2.map((seatbtn2)=>(
                <button className="seatbtn2">{seatbtn2.id}</button>
            ))}
           
            </div>
          

        </div>
    )
}
export default Self1;