import React from "react";
import "./HandArtSliderPart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";

export default function HandArtSliderPart({
  id,
  title,
  price,
  image,
  rate,
  noBorder,
  addToCard
}) {
  return (
    <div className={`hand-art-slider-part ${noBorder && "no-border"}`}>
      <div className="hand-art-link">
        <div className="image">
          <img src={image} alt={title}/>
        </div>

        <div className="info">
          <div className="title">{title}</div>
          <div className="price">
            {parseFloat(price.replace(/[^0-9.]/g, "")).toLocaleString("fa-IR", {
              maximumFractionDigits: 2,
              grouping: true,
            })}{" "}
            تومان
          </div>
        </div>

        <div className="icons">
          <AiOutlineShoppingCart 
            className="shopping-card" 
            onClick={() => addToCard({id,title, price, image, rate})} 
          />
          <CiSearch className="search-icon" />
          <IoIosHeartEmpty className="heart-icon" />
          <span className="rate">
            <span className="rate-number">{rate}</span>
            <FaStar className="star-icon" />
          </span>
        </div>
      </div>
    </div>
  );
}