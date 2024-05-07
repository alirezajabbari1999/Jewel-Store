// این کامپوننت مربوط به بخش تایتل و عنوان هر سکشن میباشد
import React from "react";
import "./SectionsHeader.css";
import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

export default function SectionsHeader({
  title,
  btn,
  to,
  icon,
  btnTitleWhite, //این پراپ رو گذاشتم که اگر جایی ازین کامپوننت استفاده شد و نیاز بود که
  // رنگ تایتل و عنوان دکمه سفید باشه با نوشتم این پراپ به عنوان ورودی این کامپوننت
  // در اون جایی که داریم ازش استفاده میکنیم رنگ این دو بخش از سیاه به سفید تغییر میکنه
}) {
  return (
    <div className="sections-header-container">
      <div className="right">
        {icon && icon}
        <h3
          className={`sections-header-title ${
            btnTitleWhite ? "title-white" : ""
          }`}
        >
          {title}
        </h3>
      </div>

      <div className="left">
        {btn && (
          <Link to={to} className="button">
            <span className={`title ${btnTitleWhite ? "title-white" : ""}`}>
              {btn}
            </span>
            <span className="arrow-icon-box">
              <FaArrowLeftLong className="arrow-icon" />
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
