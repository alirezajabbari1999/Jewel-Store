import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../Images/logo.gif";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`topbar-container ${scrolled ? "scrolled" : ""}`}>
      <Row className="topbar-row">
        <Col className="topbar-right" lg={8}>
          <div className="topbar-logo">
            <Link to="/" className="logo-link">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>

          <div className="search-box">
            <CiSearch className="search-icon" />
            <input type="text" placeholder="جستجو در هزاران محصول..." />
          </div>

          <div className="select-city-box">
            <div className="right">
              <CiLocationOn className="location-icon" />
            </div>
            <div className="left">
              <span className="select-city">انتخاب مكان</span>
              <span className="filter-city">فیلتر شهر</span>
            </div>
          </div>
        </Col>

        <Col className="topbar-left" lg={4}>
          <div>
            <Link to="/shop" className="circle-question-link">
              <BsQuestionCircle className="circle-question-icon" />
            </Link>
          </div>

          <div className="login-box">
            <a className="login-btn" href="javascript:void(0)">
              ورود/ثبت نام
            </a>
          </div>

          <div className="shopping-card">
            <AiOutlineShoppingCart className="shopping-card-icon" />
            <span className="shopping-count">0</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
