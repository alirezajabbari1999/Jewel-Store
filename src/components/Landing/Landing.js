import React, { useState, useEffect } from "react";
import "./Landing.css";
import { Container, Row, Col } from "react-bootstrap";
import smallBanner from "./../../Images/smallbanner.webp";

import SwipperSlider from "./../SwipperSlider/SwipperSlider";

// مربوط به اسلایدر
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Landing() {
  const [landingSliderImg, setLandingSliderImg] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/landingSliderImgs")
      .then((res) => res.json())
      .then((data) => setLandingSliderImg(data));
  }, []);

  const autoplaySettings = {
    delay: 4000,
    disableOnInteraction: false,
  };

  return (
    <div className="landing-container">
      <Container>
        <Row>
          <Col md={8} className="slider-box">
            <SwipperSlider
              slidesPerView={1}
              spaceBetween={30}
              autoplaySettings={autoplaySettings}
              slidesPerView992={1}
              slidesPerView768={1}
              slidesPerView576={1}
              slidesPerView320={1}
              
              showPagination={{
                clickable: true,
              }}
            >
              {landingSliderImg.map((item) => (
                <SwiperSlide>
                  <img src={item.image} alt="Landing slider Image" />
                </SwiperSlide>
              ))}
            </SwipperSlider>
          </Col>

          <Col md={4}>
            <img
              src={smallBanner}
              alt="small-banner"
              className="small-banner"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
