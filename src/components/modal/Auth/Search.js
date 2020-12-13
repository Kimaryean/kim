import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="rooms_title">Room Selection</div>
      <Link to="/lab1">
        <button className="room_btn">LAB1</button>
      </Link>
      <Link to="/lab2">
        <button className="room_btn">LAB2</button>
      </Link>
      <Link to="/self1">
        <button className="room_btn">자기주도 학습실1</button>
      </Link>
      <Link to="/self2">
        <button className="room_btn">자기주도 학습실2</button>
      </Link>
      <Link to="/creative">
        <button className="room_btn">창의 공작실</button>
      </Link>
    </>
  );
};
export default Search;
