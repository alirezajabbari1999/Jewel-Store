import React, { useState, useEffect } from "react";
import "./TopCategories.css";
import TopCategoriesBox from "./../TopCategoriesBox/TopCategoriesBox";
import { Container } from "react-bootstrap";
import SwipperSlider from "./../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";

export default function TopCategories() {
  const [topCategoriesImg, setTopCategoriesImg] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/topCategories")
      .then((res) => res.json())
      .then((data) => setTopCategoriesImg(data));
  }, []);

  const autoplaySettings = {
    delay: 2500,
    disableOnInteraction: false,
  };

  return (
    <div>
      <Container className="full-width-container">
        {/* این کامپوننت عنوان هر سکشن رو نمایش میده */}
        <SectionsHeader title="دسته هاي برتر" />

        <div className="top-categories-container">
          <div className="top-categories-row">
            <SwipperSlider
              slidesPerView={7}
              spaceBetween={30}
              autoplaySettings={autoplaySettings}
              slidesPerView1200={7}
              slidesPerView992={7}
              slidesPerView768={5}
              slidesPerView576={4}
              slidesPerView320={4}
              slidesPerView220={2}
            >
              {topCategoriesImg.map((item) => (
                <SwiperSlide key={item.id}>
                  <TopCategoriesBox image={item.image} />
                </SwiperSlide>
              ))}
            </SwipperSlider>
          </div>
        </div>
      </Container>
    </div>
  );
}
