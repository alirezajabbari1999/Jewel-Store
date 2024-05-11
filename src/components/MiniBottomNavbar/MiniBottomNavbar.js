// این کامپوننت مربوط به منوی کوچکی است که در ابعاد کوچکتر از 991 پیکسل در پایین صفحه نمایش داده میشود
import React from "react";
import "./MiniBottomNavbar.css";
import { GoHome } from "react-icons/go";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MiniBottomNavbar() {
  return (
    <div className="MiniBottomNavbar">
      <div className="mini-bottom-navbar-container">
        <Link to="" className="mini-bottom-navbar-item">
          <GoHome className="icon" />
          <span className="title">خانه</span>
        </Link>
        <Link to="" className="mini-bottom-navbar-item">
          <BiCategoryAlt className="icon" />
          <span className="title">دسته ها</span>
        </Link>
        <Link to="" className="mini-bottom-navbar-shopping-box">
          <AiOutlineShoppingCart className="shopping-cart-icon" />
          <span className="shopping-cart-count">0</span>
        </Link>
        <Link to="" className="mini-bottom-navbar-item">
          <GoHeart className="icon" />
          <span className="title">علاقه مندی ها</span>
        </Link>
        <Link to="" className="mini-bottom-navbar-item">
          <FaRegUser className="icon" />
          <span className="title">حساب کاربری</span>
        </Link>
      </div>
    </div>
  );
}
