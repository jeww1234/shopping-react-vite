import "./App.css";
import{ Routes, Route } from "react-router-dom"
import ProductAll from "./page/ProductAll"
import ProductDetail from "./page/ProductDetail"
import Login from "./page/Login";

function App() {
  //전체 상품페이지 상세 상품페이지
  //전체 상품페이지 -> 전체 상품
  //로그인 페이지 클릭 -> 로그인 페이지 나온다
  //디테일 페이지 클릭 -> 로그인 되어있을 시 디테일 페이지
  //로그인이 안 되었을 경우 로그인 페이지
  //로그아웃 버튼 클릭하면 로그아웃이된다
  //로그아웃되면 디테일 페이지를 볼 수 없다 -> 로그인 페이지로 이동
  //상품검색

  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
