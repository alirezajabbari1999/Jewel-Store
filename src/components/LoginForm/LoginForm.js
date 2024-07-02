import React from "react";
import "./LoginForm.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";

export default function LoginForm({ isActive,onClose }) {
  return (
    <div className="login-form-container">
      <div className={`login-form ${isActive ? "active" : ""}`}>
        <div className="close-btn-box">
          <span className="title">ورود به سایت</span>
          <span className="close-btn" onClick={onClose}>
            <IoClose className="icon" />
          </span>
        </div>

        <div className="form-container">
          <form action="" className="form">
            <div className="form-row">
              <label htmlFor="">نام کاربری</label>
              <div className="input-box">
                <input type="text" placeholder="نام کاربری خود را وارد کنید" />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="">رمز عبور</label>
              <div className="input-box">
                <input
                  type="password"
                  placeholder="رمز عبور خود را وارد كنيد"
                />
                <IoMdEye className="show-icon" />
              </div>
            </div>
            <div className="checkbox-row">
              <input type="checkbox" />
              <label htmlFor="">مرا به خاطر بسپار</label>
            </div>
            <div className="form-row">
              <input
                className="submit-btn"
                type="submit"
                value="ورود به سایت"
              />
            </div>
          </form>
        </div>

        <div className="sign-in-row">
          <span className="question-text">قبلا در سایت ثبت نام نکرده اید؟</span>
          <Link to="" className="link">
            ثبت نام در سایت
          </Link>
        </div>
      </div>
    </div>
  );
}
