import React from "react";
import "./Footer.css";
import logo from "./../../Images/logo.png";
import etemadImg from "./../../Images/enamad.png";
import samandehi from "./../../Images/samandehi.png";
import etehadieh from "./../../Images/1e5dab5a.png";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="first-row">
        <img src={logo} alt="logo" />
        <a href="#">
          بازگشت به بالا <IoIosArrowUp />
        </a>
      </div>

      <div className="second-row">
        <span>شماره تماس: 061-535-10225</span>
        <span>آدرس ایمیل: info@parskala.com</span>
        <span>هفت روز هفته ، 24 ساعت شبانه‌روز پاسخگوی شما هستیم.</span>
      </div>

      <div className="third-row">
        <div className="about-store">
          <h3>درباره فروشگاه اینترنتی طلا و جواهرات</h3>
          <p>
            ارس کالا، ویترین آنلاین طلا و جواهر کشور است که با هدف توسعه و تحول
            صنعت طلا و جواهر فعالیت خود را آغاز کرده است . هموطنان عزیز میتوانند
            در هر لحظه از شبانه روز از فروشگاههای معتبر طلا و جواهر ایران دیدن
            فرمایند و با بررسی ، مقایسه و انتخاب محصول مورد نظر خود ، لذت یک
            انتخاب هوشمندانه را تجربه کنند.تولید کنندگان و فروشندگان طلا و جواهر
            نیز میتوانند با ثبت نام در سایت و درخواست ایجاد فروشگاه در کوتاه
            ترین زمان ممکن ، فروشگاه اینترنتی به نام خود افتتاح نمایند و با ثبت
            کالا و محصولات در فروشگاه خود، تجربه جدیدی از معرفی و فروش
            محصولاتشان را در حوزه تجارت الکترونیک تجربه نمایند. کالاهای قابل
            ارائه در سایت شامل انواع مصنوعات طلا و جواهر با عیار 18 است.
          </p>
        </div>

        <div className="footer-images">
          <img src={etemadImg} alt="footer images" />
          <img src={samandehi} alt="footer images" />
          <img src={etehadieh} alt="footer images" />
        </div>
      </div>

      <div className="fourth-row">
        <div className="copy-right">
          <span>
            استفاده از مطالب اینترنتی پارس کالا فقط برای مقاصد غیرتجاری و با ذکر
            منبع بلامانع است. کلیه حقوق این سایت متعلق به پارس کالا می‌باشد
          </span>
          <span>Copyright © 2006 - 2024 masirwp.com</span>
        </div>
      </div>
    </div>
  );
}
