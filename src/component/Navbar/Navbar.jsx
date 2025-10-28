import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.style.css";

const Navbar = () => {
  const menuList = [
    "여성",
    "남성",
    "Divided",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>
      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVR3fypQR1hKJLLklwR7YRKXsu1bcSUK37g&s"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menuList">
          {menuList.map((menu, id) => (
            <li key={id}>{menu}</li>
          ))}
        </ul>
        <div className="input-area">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" id="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
