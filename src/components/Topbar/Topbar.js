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
import ShoppingCardSidebar from "../ShoppingCardSidebar/ShoppingCardSidebar";

export default function Topbar({ cardItems, setCardItems }) {
  const [scrolled, setScrolled] = useState(false);
  const [overlyActive, setOverlyActive] = useState(false);
  const [isLoginFormActive, setIsLoginFormActive] = useState(false);
  const [isCitySearchBoxActive, setIsCitySearchBoxActive] = useState(false);
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(cardItems.length); // New state for cart item count

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

  // Update cart item count when cardItems prop changes
  useEffect(() => {
    setCartItemCount(cardItems.length);
  }, [cardItems]);

  const overlyHandler = () => {
    setOverlyActive(!overlyActive);
  };

  const overlyCloseHandler = () => {
    setOverlyActive(false);
  };

  const handleLoginFormClose = () => {
    setIsLoginFormActive(false);
    setOverlyActive(false);
  };

  const citySearchBoxClose = () => {
    setIsCitySearchBoxActive(false);
    setOverlyActive(false);
  };

  const toggleShoppingCart = () => {
    setIsShoppingCartOpen(!isShoppingCartOpen);
    setOverlyActive(!overlyActive);
  };

  const closeShoppingCard = () => {
    setIsShoppingCartOpen(false);
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

          <div
            className="shopping-card"
            onClick={() => {
              toggleShoppingCart();
            }}
          >
            <AiOutlineShoppingCart className="shopping-card-icon" />
            <span className="shopping-count">{cartItemCount}</span> {/* Display cart item count from state */}
          </div>
        </Col>
      </Row>

      <LoginForm isActive={isLoginFormActive} onClose={handleLoginFormClose} />

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
          setIsShoppingCartOpen(false);
        }}
      ></div>

      <ShoppingCardSidebar
        isOpen={isShoppingCartOpen}
        onClose={closeShoppingCard}
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
    </div>
  );
}


