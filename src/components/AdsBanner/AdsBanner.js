import React, { useRef, useEffect } from "react";
import "./AdsBanner.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "./../../Images/adsbanner1.webp";
import banner2 from "./../../Images/adsbanner2.webp";


// // هاوری که روی تصاویر بنر اعمال شده با استفاده از لایبرری
// // tilt
// // انجام شده
// // npm install vanilla-tilt
import Tilt from "vanilla-tilt";

export default function AdsBanner() {
  const tiltRef1 = useRef();
  const tiltRef2 = useRef();

  useEffect(() => {
    if (tiltRef1.current) {
      Tilt.init(tiltRef1.current, {
        maxTilt: 5,
        speed: 400,
        perspective: 1400,
        scale: 1.0001,
        axis: "all",
      });
    }
    if (tiltRef2.current) {
      Tilt.init(tiltRef2.current, {
        maxTilt: 5,
        speed: 400,
        perspective: 1400,
        scale: 1.0001,
        axis: "all",
      });
    }
  }, []);

  return (
    <Container>
      <div className="ads-banner-container">
        <Row>
          <Col xs={12} lg={6}>
            <Link to="">
              <div ref={tiltRef1}>
                <img src={banner2} alt="Banner" className="ads-img" />
              </div>
            </Link>
          </Col>

          <Col xs={12} lg={6}>
            <Link to="">
              <div ref={tiltRef2}>
                <img src={banner1} alt="Banner" className="ads-img" />
              </div>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
