import React from "react";
import "./ParsAccessorySectionPart.css";

export default function ParsAccessorySectionPart({ title, image }) {
  return (
    <div className="pars-accessory-part-container">
      <div className="image-box">
        <img src={image} alt="" />
      </div>

      <div className="title">{title}</div>
    </div>
  );
}
