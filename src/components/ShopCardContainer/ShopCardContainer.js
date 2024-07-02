import React from "react";
import "./ShopCardContainer.css";
import ShopCard from "../ShopCard/ShopCard";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ShopCardContainer({ products }) {
  return (
    <div className="shop-card-container">
      <Link to="">
        <Row>
          {products.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} xs={12}>
              <ShopCard {...product} />
            </Col>
          ))}
        </Row>
      </Link>
    </div>
  );
}
