import React from "react";
import "./ProductInfo.css";
import { Row, Col } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { LuGalleryVertical } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { PiSquareHalfBottom } from "react-icons/pi";
import img1 from "./../../Images/part.png";

export default function ProductInfo() {
  return (
    <div className="product-info-container">
      <Row className="row">
        <Col lg={4} className="right">
          <div className="reactions-icons">
            <div className="icon-box">
              <CiHeart className="icon" />
              <span className="icon-text">افزودن به علاقمندی ها</span>
            </div>
            <div className="icon-box">
              <RiSendPlaneLine className="icon" />
              <span className="icon-text">به اشتراگ گذاری</span>
            </div>
            <div className="icon-box">
              <CiBellOn className="icon" />
              <span className="icon-text">مرا آگاه کن</span>
            </div>
            <div className="icon-box">
              <LuGalleryVertical className="icon" />
              <span className="icon-text">مقایسه محصول</span>
            </div>
          </div>

          <div className="image-box">
            <img src={img1} alt="product image" />
          </div>
        </Col>

        <Col lg={8} className="left">
          <div className="title-side">
            <h3 className="title">انگشتر طلا مدل آرون با سنگ کوانزیت</h3>
          </div>
          <div className="info-side">
            <div className="rate-container">
              <div className="rate-box">
                <div className="rate">
                  <FaStar className="star-icon" />
                  <span>0</span>
                </div>
                <span className="rate-text">از 0 رای</span>
              </div>
            </div>
            <div className="info-box">
              <div className="header-box">
                <BiStoreAlt className="store-icon" />
                <div className="header">فروشگاه طلا و جواهرات</div>
              </div>
              <div className="mojodi">
                <PiSquareHalfBottom className="shop-icon" />
                <span>10 عدد در انبار</span>
              </div>
              <div className="ersal">
                <div className="red-circle"></div>
                <span className="ersal-text">
                  ارسال توسط فروشگاه طلا و جواهرات پارس کالا
                </span>
              </div>
              <div className="price">
                8700000 <span>تومان</span>
              </div>
              <div className="update-info">بروزرسانی قیمت: 28 اسفند 1401</div>
              <div className="btns">
                <div className="counter">
                  <button className="plus">+</button>
                  <span className="count">1</span>
                  <button className="mines">-</button>
                </div>
                <div className="shop-card-btn">افزودن به سبد خرید</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
