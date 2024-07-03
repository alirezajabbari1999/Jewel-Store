import React, { useState } from "react";
import "./ShopHeader.css";
import { Link } from "react-router-dom";
import { BsSortDown } from "react-icons/bs";

export default function ShopHeader({ sortProducts }) {
  const [activeMenuItem, setActiveMenuItem] = useState("all");

  const handleItemClick = (type) => {
    setActiveMenuItem(type);
  };

  return (
    <div className="shop-header">
      <div className="shop-road">
        <Link to="/" className="link">
          خانه
        </Link>
        / فروشگاه
      </div>

      <div className="shop-header-container">
        <div className="right">
          <span className="sort-title">
            <BsSortDown className="sort-icon" />
            مرتب سازی :
          </span>

          <div className="shop-menu">
            <ul>
              <li
                className={`shop-menu-item ${
                  activeMenuItem === "all" ? "active" : ""
                }`}
                onClick={() => {
                  sortProducts("all");
                  handleItemClick("all");
                }}
              >
                پیشفرض
              </li>
              <li
                className={`shop-menu-item ${
                  activeMenuItem === "popular" ? "active" : ""
                }`}
                onClick={() => {
                  sortProducts("popular");
                  handleItemClick("popular");
                }}
              >
                محبوب ترین
              </li>
              <li
                className={`shop-menu-item ${
                  activeMenuItem === "new" ? "active" : ""
                }`}
                onClick={() => {
                  sortProducts("new");
                  handleItemClick("new");
                }}
              >
                جدیدترین
              </li>
              <li
                className={`shop-menu-item ${
                  activeMenuItem === "inexpensive" ? "active" : ""
                }`}
                onClick={() => {
                  sortProducts("inexpensive");
                  handleItemClick("inexpensive");
                }}
              >
                ارزانترین
              </li>
              <li
                className={`shop-menu-item ${
                  activeMenuItem === "expensive" ? "active" : ""
                }`}
                onClick={() => {
                  sortProducts("expensive");
                  handleItemClick("expensive");
                }}
              >
                گرانترین
              </li>
            </ul>
          </div>
        </div>

        <div className="left">
          نمایش قیمت <span>15</span> کالا
        </div>
      </div>
    </div>
  );
}
