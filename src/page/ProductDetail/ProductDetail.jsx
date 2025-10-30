import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ProductDetail.style.css"

const ProductDetail = ({ productList }) => {
  // const [product, setProduct] = useState(null)
  console.log("dddd", productList[0]);
  const { id } = useParams();
  let detailCard = productList.find((item) => String(item.id) === id);

  // let url = `https://my-json-server.typicode.com/jeww1234/shopping-react-vite/product/${id}`
  // let response = await fetch(url)
  // let data = response.json()
  // console.log(data)
  // setProduct(dataF)

  //패치를 다시해서 데이터를 가져오면 좋은점
  //SEO에 유리함 디테일 페이지 각각이 검색에 노출 될 수 있다
  //새로고침해도 데이터가 사라지지 않는다.

  return (
    <Container className="detail-card">
      <Row>
        <Col lg={6} md={12} className="detail-card-imgBox">
          <img src={detailCard?.img} alt=""/>
        </Col>
        <Col lg={6} md={12} className="detail-card-infoBox py-4">
          <h2>{detailCard?.title}</h2>
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
