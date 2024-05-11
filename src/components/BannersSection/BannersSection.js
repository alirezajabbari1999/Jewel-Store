import React from "react";
import "./BannersSection.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "./../../Images/banner-4taei-01.webp";
import img2 from "./../../Images/banner-4taei-02.webp";
import img3 from "./../../Images/banner-4taei-03.webp";
import img4 from "./../../Images/banner-4taei-04.webp";

export default function BannersSection() {
  return (
    <Container className="full-width-container">
      <div className="banners-section-container">
        <Row className="banners-section-row">
          <Col md={3} xs={6} className="banners-section-col">
            <div className="image-container">
              <Link to="">
                <img src={img2} alt="Banner images" />
              </Link>
            </div>
          </Col>
          <Col md={3} xs={6} className="banners-section-col">
            <div className="image-container">
              <Link to="">
                <img src={img4} alt="Banner images" />
              </Link>
            </div>
          </Col>
          <Col md={3} xs={6} className="banners-section-col">
            <div className="image-container">
              <Link to="">
                <img src={img3} alt="Banner images" />
              </Link>
            </div>
          </Col>
          <Col md={3} xs={6} className="banners-section-col">
            <div className="image-container">
              <Link to="">
                <img src={img1} alt="Banner images" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
