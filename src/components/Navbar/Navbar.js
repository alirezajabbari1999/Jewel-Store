import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiHome6Line } from "react-icons/ri";
import { BiStore } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

export default function Navbar() {
  const [megaMenuData, setMegaMenuData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/megaMenuData")
      .then((res) => res.json())
      .then((data) => setMegaMenuData(data));
  }, []);

  return (
    <div className="navbar-container">
      <ul className="navbar-ul">
        <li className="navbar-li">
          <IoMenu className="navbar-menu-icon" />
          <span className="navbar-menu">دسته بندی محصولات</span>

          <div className="mega-menu">
            <ul className="mega-menu-ul">
              {megaMenuData.map((item) => (
                <li className="mega-menu-li">
                  <Link to={item.url} className="mega-menu-link">
                    <span>{item.title}</span>
                    <span className="mega-menu-icon">
                      <IoIosArrowBack />
                    </span>
                  </Link>

                  {/* ساب منو ها */}
                  <ul className="submenu-ul">
                    {item.subItems.map((submenu) => (
                      <li className="submenu-li">
                        <Link to={submenu.url} className="submenu-link">{submenu.title}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
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
