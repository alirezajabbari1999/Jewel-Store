import React, { useState, useEffect } from "react";
import "./AccessoryPorbazdidSection.css";
import { Container, Row, Col } from "react-bootstrap";
import SectionsHeader from "../SectionsHeader/SectionsHeader";
import AccessoryPorbazdidPart from "../AccessoryPorbazdidPart/AccessoryPorbazdidPart";
import { Autoplay } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

export default function AccessoryPorbazdidSection() {
  const [accessoryProbazdidData, setAccessoryPorbazdidData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/accessoryPorbazdidData")
      .then((res) => res.json())
      .then((data) => setAccessoryPorbazdidData(data));
  }, []);

  return (
    <Container className="full-width-container">
      <div className="porbazdid-container">
        <Row className="porbazdid-container-row">
          <Col className="rightside" md={8}>
            <SectionsHeader
              title="اکسسوری های پربازدید"
              btn="مشاهده محصول"
              btnTitleWhite
            />

            <div className="items">
              <Row>
                {accessoryProbazdidData.map((item) => (
                  <Col key={item.id} xs={4}>
                    <AccessoryPorbazdidPart
                      link={item.link}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* اسلایدر */}
          <Col className="leftside" md={3}>
            <div className="slider-box">
              <h2 className="slider-box-title">محصولات فروش ویژه</h2>

              <Swiper
                className="mySwiper"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {accessoryProbazdidData.map((item) => (
                  <SwiperSlide>
                    <div className="slider-item">
                      <div className="top">
                        <div className="image">
                          <img src={item.image} alt="" />
                        </div>
                      </div>
                      <div className="bottom">
                        <span>{item.title}</span>
                        <span> {item.price} تومان</span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
