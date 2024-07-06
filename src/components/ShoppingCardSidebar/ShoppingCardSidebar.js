import React, { useState, useEffect } from "react";
import "./ShoppingCardSidebar.css";
import { IoClose } from "react-icons/io5";
import emptyImg from "./../../Images/empty-cart.svg";
import { Link } from "react-router-dom";
import { TfiWrite } from "react-icons/tfi";
import { HiOutlineTag } from "react-icons/hi";

export default function ShoppingCardSidebar({ isOpen, onClose, cardItems, setCardItems }) {
  // استیت مربوط به شمارنده کنار هر محصول در سبد خرید
  const [itemCounts, setItemCounts] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // آیتم های حذف شده از سبد خرید اینجا ذخیره میشن
  const [deletedItems, setDeletedItems] = useState([]);


  useEffect(() => {
    const counts = {};
    if (cardItems && cardItems.length > 0) {
      cardItems.forEach((item) => {
        if (counts[item.id]) {
          counts[item.id].count += 1;
        } else {
          counts[item.id] = { ...item, count: 1 };
        }
      });
    }
    setItemCounts(counts);
  }, [cardItems]);

  useEffect(() => {
    // Object.values(itemCounts): این تابع مقادیر شیء itemCounts را به صورت یک آرایه
    // برمی‌گرداند. هر آیتم در این آرایه شامل یک شیء با مشخصات آیتم و شمارشگر آن است.
    // reduce: این متد روی آرایه ایجاد شده توسط Object.values اجرا می‌شود. reduce آرایه را به
    // یک مقدار واحد کاهش می‌دهد، در این مورد، به مجموع قیمت‌ها.
    const total = Object.values(itemCounts).reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
    setTotalPrice(total);
  }, [itemCounts]);

  const plusHandler = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: {
        ...prevCounts[itemId],
        count: prevCounts[itemId].count + 1,
      },
    }));
  };

  const minesHandler = (itemId) => {
    setItemCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (newCounts[itemId].count > 1) {
        newCounts[itemId].count -= 1;
      } else {
        // حذف از itemCounts و اضافه به deletedItems
        setDeletedItems((prevDeletedItems) => [...prevDeletedItems, itemId]);
        delete newCounts[itemId];
      }
      return newCounts;
    });
  };
  

  // Object.values(itemCounts): این متد تمام مقادیر (values) موجود در شیء itemCounts را به صورت 
  // یک آرایه برمی‌گرداند. در اینجا، itemCounts شامل تمام محصولاتی است که در سبد خرید وجود دارند، هر 
  // کدام با شناسه‌ی یکتا خود (itemId) و تعداد مربوطه.
  const itemArray = Object.values(itemCounts).filter(item => !deletedItems.includes(item.id));


  const removeItemHandler = (itemId)=>{
    setCardItems((prevItems)=> prevItems.filter((item)=> item.id !== itemId))
  }


  return (
    <div className={`shopping-card-sidebar ${isOpen ? "open" : ""}`}>
      <div className="header">
        <span>شما این محصولات را انتخاب کرده اید</span>
        <IoClose className="close-icon" onClick={onClose} />
      </div>

      <div className="content">
        {itemArray.length > 0 ? (
          <div className="card-items">
            {itemArray.map((item) => (
              <div key={item.id} className="card-item">
                <div className="delete-icon">
                  <IoClose className="icon" onClick={() => removeItemHandler(item.id)}/>
                </div>
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="item-data">
                  <h4>{item.title}</h4>
                  <p>{item.price} تومان</p>
                </div>
                <div className="item-counter">
                  <button
                    className="plus-btn"
                    onClick={() => plusHandler(item.id)}
                  >
                    +
                  </button>
                  <span>{item.count}</span>
                  <button
                    className="mines-btn"
                    onClick={() => minesHandler(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
            <div className="sorat-hesab">
              <div className="first-row">
                <div className="note">
                  <TfiWrite className="note-icon" />
                  <span>یادداشت</span>
                </div>
                <div className="copen">
                  <HiOutlineTag className="copen-icon" />
                  <span>کوپن</span>
                </div>
              </div>

              <div className="second-row">
                <div className="price">
                  <span className="price-title">قیمت کالاها</span>
                  <span className="price-number">{totalPrice} تومان</span>
                </div>
                <div className="total-price">
                  <span className="total-title">مجموع</span>
                  <span className="total-number">{totalPrice} تومان</span>
                </div>
              </div>

              <div className="btns">
                <Link to="" className="shop-card-btn">
                  مشاهده سبد خرید
                </Link>
                <Link to="" className="payment-btn">
                  تسویه حساب
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-content">
            <img src={emptyImg} alt="empty image" />
            <h3>هیچ محصولی در سبد خرید نیست.</h3>
            <span>جهت مشاهده محصولات بیشتر به صفحات زیر مراجعه نمایید.</span>
            <div className="links">
              <Link to="/" className="link main-link">
                صفحه اصلی
              </Link>
              <Link to="/shop" className="link">
                فروشگاه
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
