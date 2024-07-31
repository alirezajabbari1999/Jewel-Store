// import React from "react";
// import "./ProductInfo.css";
// import { Row, Col } from "react-bootstrap";
// import { CiHeart } from "react-icons/ci";
// import { RiSendPlaneLine } from "react-icons/ri";
// import { CiBellOn } from "react-icons/ci";
// import { LuGalleryVertical } from "react-icons/lu";
// import { FaStar } from "react-icons/fa";
// import { BiStoreAlt } from "react-icons/bi";
// import { PiSquareHalfBottom } from "react-icons/pi";
// import img1 from "./../../Images/part.png";

// export default function ProductInfo() {
//   return (
//     <div className="product-info-container">
//       <Row className="row">
//         <Col lg={4} className="right">
//           <div className="reactions-icons">
//             <div className="icon-box">
//               <CiHeart className="icon" />
//               <span className="icon-text">افزودن به علاقمندی ها</span>
//             </div>
//             <div className="icon-box">
//               <RiSendPlaneLine className="icon" />
//               <span className="icon-text">به اشتراگ گذاری</span>
//             </div>
//             <div className="icon-box">
//               <CiBellOn className="icon" />
//               <span className="icon-text">مرا آگاه کن</span>
//             </div>
//             <div className="icon-box">
//               <LuGalleryVertical className="icon" />
//               <span className="icon-text">مقایسه محصول</span>
//             </div>
//           </div>

//           <div className="image-box">
//             <img src={img1} alt="product image" />
//           </div>
//         </Col>

//         <Col lg={8} className="left">
//           <div className="title-side">
//             <h3 className="title">انگشتر طلا مدل آرون با سنگ کوانزیت</h3>
//           </div>
//           <div className="info-side">
//             <div className="rate-container">
//               <div className="rate-box">
//                 <div className="rate">
//                   <FaStar className="star-icon" />
//                   <span>0</span>
//                 </div>
//                 <span className="rate-text">از 0 رای</span>
//               </div>
//             </div>
//             <div className="info-box">
//               <div className="header-box">
//                 <BiStoreAlt className="store-icon" />
//                 <div className="header">فروشگاه طلا و جواهرات</div>
//               </div>
//               <div className="mojodi">
//                 <PiSquareHalfBottom className="shop-icon" />
//                 <span>10 عدد در انبار</span>
//               </div>
//               <div className="ersal">
//                 <div className="red-circle"></div>
//                 <span className="ersal-text">
//                   ارسال توسط فروشگاه طلا و جواهرات پارس کالا
//                 </span>
//               </div>
//               <div className="price">
//                 8700000 <span>تومان</span>
//               </div>
//               <div className="update-info">بروزرسانی قیمت: 28 اسفند 1401</div>
//               <div className="btns">
//                 <div className="counter">
//                   <button className="plus">+</button>
//                   <span className="count">1</span>
//                   <button className="mines">-</button>
//                 </div>
//                 <div className="shop-card-btn">افزودن به سبد خرید</div>
//               </div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import "./ProductInfo.css";
// import { Row, Col } from "react-bootstrap";
// import { CiHeart } from "react-icons/ci";
// import { RiSendPlaneLine } from "react-icons/ri";
// import { CiBellOn } from "react-icons/ci";
// import { LuGalleryVertical } from "react-icons/lu";
// import { FaStar } from "react-icons/fa";
// import { BiStoreAlt } from "react-icons/bi";
// import { PiSquareHalfBottom } from "react-icons/pi";
// import img1 from "./../../Images/part.png";
// import { useParams } from "react-router-dom";

// export default function ProductInfo() {
//   const { paramsId } = useParams();
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     // دریافت اطلاعات محصول با استفاده از id
//     fetch(`http://localhost:1000/HandArtSectionData/${paramsId}`)
//       .then((res) => res.json())
//       .then((data) => setProductData(data));
//   }, [paramsId]);

//   // if (!productData) {
//   //   return <div>در حال بارگذاری...</div>;
//   // }

//   return (
//     <div className="product-info-container">
//       <Row className="row">
//         {/* {productData.map((product) => (
//           <div key={product.id}> */}
//             <Col lg={4} className="right">
//               <div className="reactions-icons">
//                 <div className="icon-box">
//                   <CiHeart className="icon" />
//                   <span className="icon-text">افزودن به علاقمندی ها</span>
//                 </div>
//                 <div className="icon-box">
//                   <RiSendPlaneLine className="icon" />
//                   <span className="icon-text">به اشتراگ گذاری</span>
//                 </div>
//                 <div className="icon-box">
//                   <CiBellOn className="icon" />
//                   <span className="icon-text">مرا آگاه کن</span>
//                 </div>
//                 <div className="icon-box">
//                   <LuGalleryVertical className="icon" />
//                   <span className="icon-text">مقایسه محصول</span>
//                 </div>
//               </div>

//               <div className="image-box">
//                 <img src={productData.image} alt="product image" />
//               </div>
//             </Col>

//             <Col lg={8} className="left">
//               <div className="title-side">
//                 <h3 className="title">انگشتر طلا مدل آرون با سنگ کوانزیت</h3>
//               </div>
//               <div className="info-side">
//                 <div className="rate-container">
//                   <div className="rate-box">
//                     <div className="rate">
//                       <FaStar className="star-icon" />
//                       <span>0</span>
//                     </div>
//                     <span className="rate-text">از 0 رای</span>
//                   </div>
//                 </div>
//                 <div className="info-box">
//                   <div className="header-box">
//                     <BiStoreAlt className="store-icon" />
//                     <div className="header">فروشگاه طلا و جواهرات</div>
//                   </div>
//                   <div className="mojodi">
//                     <PiSquareHalfBottom className="shop-icon" />
//                     <span>10 عدد در انبار</span>
//                   </div>
//                   <div className="ersal">
//                     <div className="red-circle"></div>
//                     <span className="ersal-text">
//                       ارسال توسط فروشگاه طلا و جواهرات پارس کالا
//                     </span>
//                   </div>
//                   <div className="price">
//                     8700000 <span>تومان</span>
//                   </div>
//                   <div className="update-info">
//                     بروزرسانی قیمت: 28 اسفند 1401
//                   </div>
//                   <div className="btns">
//                     <div className="counter">
//                       <button className="plus">+</button>
//                       <span className="count">1</span>
//                       <button className="mines">-</button>
//                     </div>
//                     <div className="shop-card-btn">افزودن به سبد خرید</div>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           {/* </div>
//         ))} */}
//       </Row>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import "./ProductInfo.css";
import { Row, Col } from "react-bootstrap";
import { CiHeart } from "react-icons/ci";
import { RiSendPlaneLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { LuGalleryVertical } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { BiStoreAlt } from "react-icons/bi";
import { PiSquareHalfBottom } from "react-icons/pi";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
  const { paramsId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`Fetching data for product ID: ${paramsId}`);
    fetch(`http://localhost:1000/HandArtSectionData`)
      .then((res) => res.json())
      .then((data) => {
        const product = data.find(item => item.id === `${paramsId}`);
        setProductData(product);
        setLoading(false);
        console.log(productData)
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, [paramsId]);

  if (loading) {
    return <div>در حال بارگذاری...</div>;
  }

  if (!productData) {
    return <div>محصولی یافت نشد</div>;
  }

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
              <span className="icon-text">به اشتراک گذاری</span>
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
            <img src={productData.image} alt={productData.title} />
          </div>
        </Col>

        <Col lg={8} className="left">
          <div className="title-side">
            <h3 className="title">{productData.title}</h3>
          </div>
          <div className="info-side">
            <div className="rate-container">
              <div className="rate-box">
                <div className="rate">
                  <FaStar className="star-icon" />
                  <span>{productData.rate}</span>
                </div>
                <span className="rate-text">از {productData.rateCount || 0} رای</span>
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
              <div className="ersال">
                <div className="red-circle"></div>
                <span className="ersال-text">
                  ارسال توسط فروشگاه طلا و جواهرات پارس کالا
                </span>
              </div>
              <div className="price">
                {parseFloat(productData.price.replace(/[^0-9.]/g, "")).toLocaleString(
                  "fa-IR",
                  {
                    maximumFractionDigits: 2,
                    grouping: true,
                  }
                )} تومان
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
