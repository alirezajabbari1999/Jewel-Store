import React from "react";
import "./HandArtSliderPart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function HandArtSliderPart({ title, price, image, rate ,noBorder}) {
  return (
    <div className={`hand-art-slider-part ${noBorder && "no-border"}`}>
      <div className="image">
        <img src={image} />
      </div>

      <div className="info">
        <div className="title">{title}</div>

        {/* در كد پايين براي اينكه قيمت ها بصورت اعداد 3 تايي از هم جدا بشن و كاما بينشون قرار بگيره
        ابتدا قيمت رو كه تايپش استرينگ هست به نامبر تبديل كرديم و سپس بقيه فرآيند */}
        <div className="price">
          {parseFloat(price.replace(/[^0-9.]/g, "")).toLocaleString("fa-IR", {
            maximumFractionDigits: 2,
            grouping: true,
          })}{" "}
          تومان
        </div>
      </div>

      <div className="icons">
        <AiOutlineShoppingCart className="shopping-card" />
        <CiSearch className="search-icon" />
        <IoIosHeartEmpty className="heart-icon" />
        <span className="rate">
          <span className="rate-number">{rate}</span>
          <FaStar className="star-icon" />
        </span>
      </div>
    </div>
  );
}
