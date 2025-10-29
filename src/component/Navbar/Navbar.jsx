import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";


const Navbar = ({authenticate, setAuthenticate}) => {
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

  const navigate = useNavigate()
  const goToLogin = () =>{
    if(authenticate===true){
      setAuthenticate(false)
    }else{
      navigate("/login")
    }
    
  }

  return (
    <div>
      <div className="login-button" onClick={()=>goToLogin()}>
        <FontAwesomeIcon icon={faUser} className="me-1"/>
        <div>{authenticate===true?"로그아웃":"로그인"}</div>
      </div>
      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKVR3fypQR1hKJLLklwR7YRKXsu1bcSUK37g&s"
          alt="logo"
          className="mb-4"
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
