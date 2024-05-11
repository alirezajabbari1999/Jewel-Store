import React from "react";
import "./SwipperSlider.css";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwipperSlider = ({
  slidesPerView,
  spaceBetween,
  autoplaySettings,
  showPagination,
  slidesPerView1200,
  slidesPerView992,
  slidesPerView768,
  slidesPerView576,
  slidesPerView320,
  slidesPerView220,
  showNavigation,
  children,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={autoplaySettings}
      pagination={showPagination}
      navigation={showNavigation}
      className="mySwiper"
      breakpoints={{
        1200: {
          slidesPerView: slidesPerView1200,
        },
        992: {
          slidesPerView: slidesPerView992,
        },
        768: {
          slidesPerView: slidesPerView768,
        },
        576: {
          slidesPerView: slidesPerView576,
        },
        320: {
          slidesPerView: slidesPerView320,
        },
        270: {
          slidesPerView: slidesPerView220,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwipperSlider;
