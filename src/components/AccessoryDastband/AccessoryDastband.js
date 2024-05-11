import React, { useState, useEffect } from "react";
import "./AccessoryDastband.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import { Container } from "react-bootstrap";
import SwipperSlider from "../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import HandArtSliderPart from "../HandArtSliderPart/HandArtSliderPart";

export default function AccessoryDastband() {
  const [accessoryDastbandData, setAccessoryDastbandData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/accessoryDastbandData")
      .then((res) => res.json())
      .then((data) => setAccessoryDastbandData(data));
  }, []);

  return (
    <Container className="full-width-container">
      <div className="accessory-dastband-container">
        <SectionsHeader title="اکسووری دستبند" btn="مشاهده بيشتر" to="/shop" />

        <div className="accessory-dastband-slider">
          <SwipperSlider
            slidesPerView={5}
            spaceBetween={30}
            slidesPerView1200={5}
            slidesPerView992={3}
            slidesPerView768={3}
            slidesPerView576={2}
            slidesPerView320={1}
          >
            {accessoryDastbandData.map((item) => (
              <SwiperSlide>
                <HandArtSliderPart {...item} noBorder />
              </SwiperSlide>
            ))}
          </SwipperSlider>
        </div>
      </div>
    </Container>
  );
}
