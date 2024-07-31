import React from "react";
import "./HandArtSliderPart.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function HandArtSliderPart({
  id,
  title,
  price,
  image,
  rate,
  addToCard,
}) {
  return (
    <div className={`hand-art-slider-part`}>
      <div className="hand-art-link">
        <Link to={`/product/${id}`} className="link">
          <div className="image">
            <img src={image} alt={title} />
          </div>

          <div className="info">
            <div className="title">{title}</div>
            <div className="price">
              {parseFloat(price.replace(/[^0-9.]/g, "")).toLocaleString(
                "fa-IR",
                {
                  maximumFractionDigits: 2,
                  grouping: true,
                }
              )}
              تومان
            </div>
          </div>
        </Link>

        <div className="icons">
          <AiOutlineShoppingCart
            className="shopping-card"
            onClick={() => addToCard({ id, title, price, image, rate })}
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
