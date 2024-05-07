import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiHome6Line } from "react-icons/ri";
import { BiStore } from "react-icons/bi";
import { MdPayments } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <IoMenu className="navbar-menu-icon" />
          <span className="navbar-menu">دسته بندی محصولات</span>
        </li>

        <li className="navbar-li">
          <Link to="/" className="navbat-li-link">
            <RiHome6Line className="navbar-icon" />
            <span className="navbar-title">صفحه اصلی</span>
          </Link>
        </li>

        <li className="navbar-li">
          <Link to="/shop" className="navbat-li-link">
            <BiStore className="navbar-icon" />
            <span className="navbar-title">فروشگاه</span>
          </Link>
        </li>
        <li className="navbar-li">
          <Link to="/checkout" className="navbat-li-link">
            <MdPayments className="navbar-icon" />
            <span className="navbar-title">پرداخت</span>
          </Link>
        </li>
        <span className="navbar-hover-background"></span>
      </ul>
    </div>
  );
}
