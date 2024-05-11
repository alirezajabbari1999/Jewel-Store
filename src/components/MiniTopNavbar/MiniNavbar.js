// این کامپوننت مربوط به نوباری هست که در سایز های کمتر از 991 پیکسل ظاهر میشه در بالای صفحه
import React from "react";
import "./MiniNavbar.css";
import { CgMenuRight } from "react-icons/cg";
import logo from "./../../Images/logo.gif";
import { Link } from "react-router-dom";
import { BsQuestionCircle } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

export default function MiniNavbar() {
  return (
    <div className="mini-navbar-container">
      <div className="mini-navbar">
        {/* ردیف اول نوبار */}
        <div className="mini-navbar-first-row">
          <div className="sidebar-icon-box">
            <span className="sidebar-icon">
              <CgMenuRight className="icon" />
            </span>
            <span className="title">منو</span>
          </div>
          <div className="logo-box">
            <Link to="/" className="link">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="question-icon-box">
            <BsQuestionCircle className="question-icon" />
          </div>
        </div>

        {/* ردیف دوم نوبار */}
        <div className="mini-navbar-second-row">
          <div className="search-box">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="جستجو در هزاران محصول..." />
          </div>

          <div className="panel-box">
            <div className="user-panel">
              <FaRegUser className="user-icon" />
            </div>

            <div className="shopping-card">
              <AiOutlineShoppingCart className="shopping-card-icon" />
              <span className="shopping-count">0</span>
            </div>
          </div>
        </div>

        {/* ردیف سوم نوبار */}
        <div className="mini-navbar-third-row">
          <div className="location-box">
            <GrLocation className="icon" />
            <span className="text">مکان را جهت فیلتر محصولات انتخاب کنید</span>
          </div>
          <div className="arrow-icon">
            <IoIosArrowBack className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
