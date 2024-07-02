import React, { useState, useEffect } from "react";
import "./Topbar.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../../Images/logo.gif";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LoginForm from "../LoginForm/LoginForm";
import CitySearchBox from "../CitySearchBox/CitySearchBox";

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);

  // مربوط به صفحه تیره ای که با کلیک روی دکمه ورود ایجاد میشه
  const [overlyActive, setOverlyActive] = useState(false);

  // مربوط به چک کردن وضعیت بازز یا بسته بودن فرم لاگین
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);

  // مربوط به چک کردن وضعیت بازز یا بسته بودن  باکس جستجوی شهر
  const [isCitySearchBoxActive, setIsCitySearchBoxActive] = useState(false);

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

  // کدهای مربوط به اضافه کردن یا از بین بردن لایه تیره
  const overlyHandler = () => {
    setOverlyActive(!overlyActive);
  };
  const overlyCloseHandler = () => {
    setOverlyActive(!overlyActive);
  };

  // کد مربوط به بستن فرم با دکمه بستن که روی اون قرار داره
  const handleLoginFormClose = () => {
    setIsLoginFormActive(false);
    setOverlyActive(false);
  };

  // کد مربوط به بستن باکس مربوط یه سرچ شهرها
  const citySearchBoxClose = () => {
    setIsCitySearchBoxActive(false);
    setOverlyActive(false);
  };


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
            <div
              className="left"
              onClick={() => {
                overlyHandler();
                setIsCitySearchBoxActive(!isCitySearchBoxActive);
              }}
            >
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

          <div
            className="login-box"
            onClick={() => {
              overlyHandler();
              setIsLoginFormActive(!isLoginFormActive);
            }}
          >
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

      {/* کامپوننت مربوط به باز شدن فرم لاگین */}
      <LoginForm isActive={isLoginFormActive} onClose={handleLoginFormClose} />

      {/* کامپوننت مربوط به سرچ باکس شهر ها */}
      <CitySearchBox
        isActive={isCitySearchBoxActive}
        onClose={citySearchBoxClose}
      />

      <div
        className={`overly ${overlyActive ? "active" : ""}`}
        onClick={() => {
          overlyCloseHandler();
          setIsLoginFormActive(false);
          citySearchBoxClose();
        }}
      ></div>
    </div>
  );
}
