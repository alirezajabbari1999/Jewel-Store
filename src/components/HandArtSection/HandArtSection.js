import React, { useState, useEffect } from "react";
import "./HandArtSection.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import HandArtSliderPart from "../HandArtSliderPart/HandArtSliderPart";
import SwipperSlider from "../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import SectionsHeader from "./../SectionsHeader/SectionsHeader";
import { FaMedal } from "react-icons/fa";
import ShoppingCardSidebar from "../ShoppingCardSidebar/ShoppingCardSidebar";

export default function HandArtSection({ cardItems,setCardItems,isShoppingCardSidebarOpen ,setIsShoppingCardSidebarOpen }) {
  const [handArtSectionData, setHandArtSectionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/HandArtSectionData")
      .then((res) => res.json())
      .then((data) => setHandArtSectionData(data));
  }, []);

  const addToCard = (item) => {
    setCardItems((prevItems) => [...prevItems, item]);
    setIsShoppingCardSidebarOpen(true);
  };

  const autoplaySettings = {
    delay: 2500,
    disableOnInteraction: false,
  };

  return (
    <Container className="full-width-container">
      <div className="hand-art-container">
        <div className="hand-art-title-box">
          <SectionsHeader
            className="hand-art-title"
            title="پيچ و خم فلز در هنر دست"
            icon={<FaMedal style={{ color: "gold", fontSize: "2rem" }} />}
          />
        </div>
        <div className="Hand-art-row">
          <Row className="row">
            <Col className="right" lg={3} sm={0}>
              <p className="desc">
                بستن محکم و نقش پیچ آن ماندگاری واقعی را به آن می بخشد ، در حالی
                که تفاسیر متنوع اجازه می دهد تا احساسات منحصر به فرد بیان شود.
                در عشق خود قفل کنید ، برای همیشه.
              </p>
              <Link to="" className="hand-art-link">
                <span className="link-title">مشاهده محصول</span>
                <span className="link-icon-box">
                  <FaArrowLeftLong className="link-icon" />
                </span>
              </Link>
            </Col>

            <Col className="left" lg={9} sm={12}>
              <div className="slider">
                <SwipperSlider
                  slidesPerView={4}
                  spaceBetween={30}
                  autoplaySettings={autoplaySettings}
                  slidesPerView1200={4}
                  slidesPerView992={3}
                  slidesPerView768={3}
                  slidesPerView576={3}
                  slidesPerView320={2}
                  slidesPerView220={1}
                >
                  {handArtSectionData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <HandArtSliderPart {...item} addToCard={addToCard} />
                    </SwiperSlide>
                  ))}
                </SwipperSlider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <ShoppingCardSidebar
        isOpen={isShoppingCardSidebarOpen}
        onClose={() => setIsShoppingCardSidebarOpen(false)}
        cardItems={cardItems}
        setCardItems={setCardItems}
      />
    </Container>
  );
}
