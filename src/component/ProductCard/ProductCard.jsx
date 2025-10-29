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
      <div>{item?.title}</div>
      <div>{item?.choice === true ? "*Choice" : ""}</div>
      <div>{item?.new === true ? "*신제품" : ""}</div>
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
