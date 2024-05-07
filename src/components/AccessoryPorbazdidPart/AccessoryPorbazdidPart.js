import React from "react";
import "./AccessoryPorbazdidPart.css";

export default function AccessoryPorbazdidPart({ image, title, price }) {
  return (
    <div className="porbazdid-part-container">
      <div className="right">
        <img src={image} alt="" />
      </div>

      <div className="left">
        <span>{title}</span>
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
  );
}
