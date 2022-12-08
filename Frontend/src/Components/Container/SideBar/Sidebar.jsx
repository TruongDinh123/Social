import "./sidebar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiAirplayvideo } from "react-icons/si";
import { BiBarChartSquare, BiTrendingUp } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Auth/authContext";
import { useContext } from "react";
import { faBookAtlas, faLanguage, faShop, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="sidebar gird">
      <Link to="/" className="logoDiv flex">
        <img src="/upload/logo.jpg" alt="Image Name" />
      </Link>

      <div className="menuDiv">
        <h2 className="divTitle">Danh Mục</h2>
        <ul className="menuLists gird">
          <li className="ListItem">
            <NavLink to= {`/tour/`}>
              <a href="#" className="menuLink flex">
              <MdOutlineTravelExplore className="icon"></MdOutlineTravelExplore>
              <span className="smallText">Đặt Tour</span>
            </a>
            </NavLink>
          </li>
          <NavLink to={`/posts/`} className="ListItem">
            <a href="#" className="menuLink flex">
              <IoShareSocialOutline className="icon"></IoShareSocialOutline>
              <span className="smallText">Mạng xã hội</span>
            </a>
          </NavLink>
          {currentUser.id !== null
          
          ? (<NavLink
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="ListItem">
            <a href="#" className="menuLink flex">
              <CgProfile className="icon"></CgProfile>
              <span className="smallText">Trang cá nhân</span>
            </a>
          </NavLink>)
          : ( <Navigate to={`/login`}></Navigate>)
          }
          <NavLink to={`/reels/`} className="ListItem">
            <a href="#" className="menuLink flex">
              <SiAirplayvideo className="icon"></SiAirplayvideo>
              <span className="smallText">Reels</span>
            </a>
          
          </NavLink>
        
        
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">Khác</h3>
        <ul className="menuLists gird">
          <li className="ListItem">
            <a href="#" className="menuLink flex">

              <FontAwesomeIcon icon={faShoppingBasket} className="icon"></FontAwesomeIcon>
              <span className="smallText">Mua sắm</span>
            </a>
          </li>
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <FontAwesomeIcon icon={faLanguage} className="icon"></FontAwesomeIcon>
              <span className="smallText">Từ khóa</span>
            </a>
          </li>
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <FontAwesomeIcon icon={faBookAtlas} className="icon"></FontAwesomeIcon>
              <span className="smallText">Chính sách</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon"></BsQuestionCircle>

        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Nếu bạn có vấn đề gì, xin hãy nhấn vào mục trợ giúp.</p>
          <button className="btn">Trợ giúp</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
