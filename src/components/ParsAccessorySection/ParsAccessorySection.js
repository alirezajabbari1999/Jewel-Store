import React, { useState, useEffect } from "react";
import "./ParsAccessorySection.css";
import ParsAccessorySectionPart from "../ParsAccessorySectionPart/ParsAccessorySectionPart";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ParsAccessorySection() {
  const [parsAccessoryData, setParsAccessoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1000/parsAccessoryData")
      .then((res) => res.json())
      .then((data) => setParsAccessoryData(data));
  }, []);

  return (
    <Container className="full-width-container">
      <div className="pars-accessory-container">
        <h2 className="title">دسته بندی های پارس اکسسوری</h2>

        <div className="boxes-container">
          <Row>
            {parsAccessoryData.map((item) => (
              <Col key={item.id} lg={3} md={4} sm={6} xs={12}>
                <Link to="" className="link-box">
                  <ParsAccessorySectionPart {...item} />
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}
