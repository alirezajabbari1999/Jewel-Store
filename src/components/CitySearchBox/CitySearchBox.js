import React from "react";
import "./CitySearchBox.css";
import { RiSearch2Line } from "react-icons/ri";

export default function CitySearchBox({ isActive, onClose }) {
  return (
    <div className="city-search-container">
      <div className={`city-search ${isActive ? "active" : ""}`}>
        <div className="title-row">
          <span className="title">فیلتر بر اساس شهر محصول</span>
        </div>

        <div className="input-row">
          <div className="input-box">
            <RiSearch2Line className="search-icon" />
            <input type="text" placeholder="جستجو در شهرها" />
          </div>
        </div>

        <div className="buttons-row">
          <button className="btn accept-btn">تایید</button>
          <button className="btn cancel-btn" onClick={onClose}>
            انصراف
          </button>
        </div>
      </div>
    </div>
  );
}
