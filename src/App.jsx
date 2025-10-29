import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll/ProductAll";
import ProductDetail from "./page/ProductDetail/ProductDetail";
import Login from "./page/Login/Login";
import Navbar from "./component/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import Footer from "./component/Footer/Footer"
import productsData from "../db.json";

function App() {
  const [authenticate, setAuthenticate] = useState(false); //in = t, out = f

  const [productList, setProductList] = useState([]);

  // const getProducts = async () => {
  //   let url = "http://localhost:3000/products";
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  //   setProductList(data);
  //   console.log(productList);
  // };

  useEffect(() => {
    setProductList(productsData.products);
  }, []);
  //전체 상품페이지 상세 상품페이지
  //전체 상품페이지 -> 전체 상품
  //로그인 페이지 클릭 -> 로그인 페이지 나온다
  //디테일 페이지 클릭 -> 로그인 되어있을 시 디테일 페이지
  //로그인이 안 되었을 경우 로그인 페이지
  //로그아웃 버튼 클릭하면 로그아웃이된다
  //로그아웃되면 디테일 페이지를 볼 수 없다 -> 로그인 페이지로 이동
  //상품검색
  useEffect(()=>{
    console.log(authenticate);
  },[authenticate])
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll productList={productList}/>}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} productList={productList}/>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
