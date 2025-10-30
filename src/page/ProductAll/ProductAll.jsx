import React from "react";
import ProductCard from "../../component/ProductCard/ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const ProductAll = ({ productList }) => {
  

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, id) => (
            <Col key={id} lg={4} md={6} sm={12}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
