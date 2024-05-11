import React from "react";
import "./AccessoryPorbazdidPart.css";
import { Link } from "react-router-dom";

export default function AccessoryPorbazdidPart({ link, image, title, price }) {
  return (
    <Link to={link}>
      <div className="porbazdid-part-container">
        <div className="right">
          <img src={image} alt="" />
        </div>

        <div className="left">
          <span className="title">{title}</span>
          <span>
            {/* این کد برای جداکردن سه تا سه تا ارقام قیمت از هم هست */}
            {parseFloat(price.replace(/[^0-9.]/g, "")).toLocaleString("fa-IR", {
              maximumFractionDigits: 2,
              grouping: true,
            })}{" "}
            تومان
          </span>
        </div>
      </div>
    </Link>
  );
}
