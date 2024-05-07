import React, { useState, useEffect } from "react";
import "./ValentineAccessory.css";
import ValentineAccessoryPart from "../ValentineAccessoryPart/ValentineAccessoryPart";
import { Container, Row, Col } from "react-bootstrap";
import SwipperSlider from "../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ValentineAccessory() {
  const [valentineAccessoryData, setValentineAccessoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/valentineSectionImg")
      .then((res) => res.json())
      .then((data) => setValentineAccessoryData(data));
  }, []);

  const autoplaySettings = {
    delay: 2500,
    disableOnInteraction: false,
  };

  return (
    <Container>
      <div className="valentine-section-container">
        <Row>
          <Col className="right" xs={12} lg={5}>
            <h1 className="title">اکسسوری های مناسب کادو ولنتاین</h1>
            <p className="desc">
              اگر به دنبال بهترین اکسسوری های مناسب کادو ولنتاین هستید، آوانگاره
              در این بخش یک راهنمای کامل در این خصوص آماده کرده است
            </p>
          </Col>

          <Col className="left" xs={12} lg={7}>
            <SwipperSlider
              slidesPerView={6}
              spaceBetween={30}
              autoplaySettings={autoplaySettings}
              slidesPerView992={6}
              slidesPerView768={5}
              slidesPerView576={4}
              slidesPerView320={3}
            >
              {valentineAccessoryData.map((item) => (
                <SwiperSlide>
                  <ValentineAccessoryPart image={item.image} />
                </SwiperSlide>
              ))}
            </SwipperSlider>

            <Link to="" className="link-box">
              <span>مشاهده +8 کالا</span>
              <FaArrowLeftLong className="arrow-icon" />
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
