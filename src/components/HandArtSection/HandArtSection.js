import React, { useState, useEffect } from "react";
import "./HandArtSection.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import HandArtSliderPart from "../HandArtSliderPart/HandArtSliderPart";
import SwipperSlider from "../SwipperSlider/SwipperSlider";
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SectionsHeader from "./../SectionsHeader/SectionsHeader";
import { FaMedal } from "react-icons/fa";

export default function HandArtSection() {
  const [handArtSectionData, setHandArtSectionData] = useState([]);

  // من اینو نوشتم ولی با کلیک روی دکمه های منو مثل فروشگاه-پرداخت و ... ارور میگرفتم
  // این ارور رو میگرفتم error destroy is not a function
  // useEffect(
  //   () =>
  //     fetch("http://localhost:1000/HandArtSectionData")
  //       .then((res) => res.json())
  //       .then((data) => setHandArtSectionData(data)),
  //   []
  // );

  // این کد رو هوش مصنوعی داد بهم
  // اینم مربوط به همون یوز افکت پایینه
  const [cancelFetch, setCancelFetch] = useState(() => null);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const signal = controller.signal;

      try {
        const response = await fetch(
          "http://localhost:1000/HandArtSectionData",
          { signal }
        );
        const data = await response.json();
        setHandArtSectionData(data);
      } catch (error) {
        console.error(error);
      } finally {
        controller.abort();
      }
    };

    const newCancel = fetchData();
    setCancelFetch(newCancel);

    return () => {
      if (cancelFetch) {
        cancelFetch();
      }
    };
  }, []);

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
                      <HandArtSliderPart {...item} />
                    </SwiperSlide>
                  ))}
                </SwipperSlider>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
