import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Check.css";

const ongoinglist = [
  {
    name: "김아련",
    room: "창의공작실",
    number: "1번",
    date: "2020-12-10",
  },
  {
    name: "김승연",
    room: "창의공작실",
    date: "2020-12-10",
    number: "2번",
  },
];

const Management = () => {
  return (
    <>
      <div className="management_header">
        <img src={Logo} alt="logo" className="check_logo" />
        <Link to="/">
          <button className="check_logout">Logout</button>
        </Link>
        <div className="management_title">대여자 확인</div>
      </div>

      <div className="sort_bar">
        <div className="sort_bar_title">
          <div>이름</div>
          <div>학습실</div>
          <div>좌석</div>
          <div>날짜</div>
          <div>확인</div>
        </div>
      </div>
      <div className="management_board">
        <div className="management_board_content">
          {ongoinglist.map((list) => (
            <>
              <div className="management_content_list">
                <div>{list.name}</div>
                <div style={{ marginLeft: 420 }}>{list.room}</div>
                <div style={{ color: "#6372A8", marginLeft: 430 }}>
                  {list.number}
                </div>
                <div style={{ color: "#949494", marginLeft: 430 }}>
                  {list.date}
                </div>
                <div>{list.check}</div>
                <button className="check_btn">확인</button>
              </div>
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Management;
