import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ProductDetail.style.css"

const ProductDetail = ({ productList }) => {
  console.log("dddd", productList[0]);
  const { id } = useParams();
  let detailCard = productList.find((item) => String(item.id) === id);

  return (
    <Container className="detail-card">
      <Row>
        <Col lg={6} className="detail-card-imgBox">
          <img src={detailCard?.img} alt=""/>
        </Col>
        <Col lg={6} className="detail-card-infoBox py-4">
          <h1>{detailCard?.title}</h1>
          <span>{detailCard?.choice === true ? "*Choice" : ""}</span>
          <span className="ms-2">{detailCard?.new === true ? "*신제품" : ""}</span>
          <select name="" id="" className="my-1 ms-2">
            <option value="">사이즈</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
          </select>
          <h3><span className="me-1">\</span>{detailCard?.price}</h3>
          <Button variant="danger" type="submit">구매하기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
