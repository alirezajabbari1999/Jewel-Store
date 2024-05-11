import React, { useState, useEffect } from "react";
import "./ContactUsBadge.css";
import { AiFillMessage } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { CiMobile2 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function ContactUsBadge() {
  const [badgeActive, setBadgeActive] = useState(false);

  const badgeHandler = () => {
    setBadgeActive(!badgeActive);
  };
  const overlyCloseContentWayHandler = () => {
    setBadgeActive(!badgeActive);
  };

  return (
    <div className="contact-badge-container">
      <div
        className={`contact-circle ${badgeActive ? "active" : ""}`}
        onClick={() => badgeHandler()}
      >
        <div className="badge-title">
          <span className="icon">
            <AiFillMessage />
          </span>
          <span className="title">تماس با ما</span>
        </div>

        <div className="contact-badge-content">
          <div className="item">
            <a href="">
              <span className="content-way">تماس با فروشگاه</span>
              <span className="store-call-icon">
                <FiPhone className="icon" />
              </span>
            </a>
          </div>
          <div className="item">
            <a href="">
              <span className="content-way">تماس با پشتیبان فروش</span>
              <span className="support-call-icon">
                <CiMobile2 className="icon" />
              </span>
            </a>
          </div>
          <div className="item">
            <a href="">
              <span className="content-way">ارتباط از طریق واتس اپ</span>
              <span className="whats-app-icon">
                <FaWhatsapp className="icon" />
              </span>
            </a>
          </div>
          <div className="item">
            <a href="">
              <span className="content-way">ارتباط از طریق تلگرام</span>
              <span className="telegram-icon">
                <FaTelegram className="icon" />
              </span>
            </a>
          </div>
          <div className="item">
            <a href="">
              <span className="content-way">ارتباط از طریق اینستاگرام</span>
              <span className="instagram-icon">
                <FaInstagram className="icon" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* اين ديو مربوط به هاله سياهي هست كه با 
      باز شدن بخش راه هاي ارتباطي صفحه رو فرا ميگيره */}
      {/* همچنين يدونه آن كليك هم بهش دادم كه با كليك روي هر جاي صفحه
      بخش مربوط به راه هاي ارتباطي بسته شه */}
      <div
        className={`overly ${badgeActive ? "active" : ""}`}
        onClick={() => overlyCloseContentWayHandler()}
      ></div>
    </div>
  );
}
