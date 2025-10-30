import React from "react";
import "./ProductCard.style.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate()
  const showDetail =()=>{
    navigate(`/product/${item.id}`)
  }
  return (
    <div className="product-card" onClick={showDetail}>
      <img src={item?.img} alt="" />
      <h4>{item?.title}</h4>
      <span className="me-1">{item?.choice === true ? "*Choice" : ""}</span>
      <span className="me-1">{item?.new === true ? "*신제품" : ""}</span>
      <select name="" id="" className="my-1">
        <option value="">사이즈</option>
        <option value="">S</option>
        <option value="">M</option>
        <option value="">L</option>
      </select>
      <div>\{item?.price}</div>
    </div>
  );
};

export default ProductCard;
