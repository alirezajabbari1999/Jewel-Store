import React from "react";
import "./ShopCard.css";
import { MdLocalGroceryStore } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";

export default function ShopCard({title,price,image,count,}) {
  return (
    <div className="shop-card">
      <div className="image-box">
          <img
            src={image}
            alt="product image"
          />
      </div>

      <span className="title">{title}</span>

      <div className="mojodi-row">
        <span className="mojodi"><MdOutlineInventory className="mojodi-icon"/> {count} عدد در انبار</span>
      </div>

      <div className="price-row">
          <span className="price">{price}</span> تومان
      </div>

      <span className="basket-container">
        <MdLocalGroceryStore className="basket-icon" />
      </span>
    </div>
  );
}
