import React, { useState, useEffect } from "react";
import "./HandArtSection.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import HandArtSliderPart from "../HandArtSliderPart/HandArtSliderPart";
import { Swiper, SwiperSlide } from "swiper/react";
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

  return (
    <Container>
      <div className="hand-art-container">
        <SectionsHeader
          className="hand-art-title"
          title="پيچ و خم فلز در هنر دست"
          icon={<FaMedal style={{ color: "gold", fontSize: "2rem" }} />}
        />
        <div className="Hand-art-row">
          <Row>
            <Col className="right" lg={4} sm={12}>
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

            <Col className="left" lg={8} sm={12}>
              <div className="slider">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={5}
                  className="mySwiper"
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  breakpoints={{
                    992: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    320: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  {handArtSectionData.map((item) => (
                    <SwiperSlide key={item.id}>
                      <HandArtSliderPart {...item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
