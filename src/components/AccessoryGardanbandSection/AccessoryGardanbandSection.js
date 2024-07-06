import React, { useState, useEffect } from "react";
import "./AccessoryGardanbandSection.css";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import { Container } from "react-bootstrap";
import SwipperSlider from "../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import HandArtSliderPart from "../HandArtSliderPart/HandArtSliderPart";

export default function AccessoryGardanbandSection({ cardItems, setCardItems, setIsShoppingCardSidebarOpen }) {
  const [accessoryGardanbandData, setAccessoryGardanbandData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/accessoryGardanbandData")
      .then((res) => res.json())
      .then((data) => setAccessoryGardanbandData(data));
  }, []);

  const addToCard = (item) => {
    setCardItems((prevItems) => [...prevItems, item]);
    setIsShoppingCardSidebarOpen(true);
  };

  return (
    <Container className="full-width-container">
      <div className="accessory-gardanband-container">
        <SectionsHeader
          title="اکسووری گردنبند"
          btn="مشاهده بيشتر"
          to="/shop"
        />

        <div className="accessory-gardanband-slider">
          <SwipperSlider
            slidesPerView={5}
            spaceBetween={30}
            slidesPerView1200={5}
            slidesPerView992={3}
            slidesPerView768={3}
            slidesPerView576={2}
            slidesPerView320={1}
          >
            {accessoryGardanbandData.map((item) => (
              <SwiperSlide key={item.id}>
                <HandArtSliderPart {...item} addToCard={addToCard} noBorder />
              </SwiperSlide>
            ))}
          </SwipperSlider>
        </div>
      </div>
    </Container>
  );
}
