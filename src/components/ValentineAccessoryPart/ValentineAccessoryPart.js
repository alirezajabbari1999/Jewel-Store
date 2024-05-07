import React from "react";
import "./ValentineAccessoryPart.css";

export default function ValentineAccessoryPart({ image }) {
  return (
    <div className="valentine-part-container">
      <img src={image} alt="" />
    </div>
  );
}
