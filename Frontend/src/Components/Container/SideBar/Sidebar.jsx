import "./sidebar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoList, IoShareSocialOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiAirplayvideo } from "react-icons/si";
import { BiBarChartSquare, BiTrendingUp } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import { faBookAtlas, faLanguage, faShop, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { currentUser } = useContext(AuthContext);
  return (
    <div className="sidebar gird">
      <IoList className="icon-list"></IoList>
      <div className="sidebar-wrapper">
        <h2 className="sidebar-title">Danh Mục</h2>
        <ul className="sidebar-list gird">
          <li className="sidebar-item">
            <NavLink to={`/tours/`}>
              <a href="#" className="menuLink flex">
                <MdOutlineTravelExplore className="icon"></MdOutlineTravelExplore>
                <span className="sidebar-item-name">Travel</span>
              </a>
            </NavLink>
          </li>
          <NavLink to={`/posts/`} className="sidebar-item">
            <a href="#" className="menuLink flex">
              <IoShareSocialOutline className="icon"></IoShareSocialOutline>
              <span className="sidebar-item-name">Social</span>
            </a>
          </NavLink>
          {currentUser.id !== null

            ? (<NavLink
              to={`/profile/${currentUser.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
              className="sidebar-item">
              <a href="#" className="menuLink flex">
                <CgProfile className="icon "></CgProfile>
                <span className="sidebar-item-name">Profile</span>
              </a>
            </NavLink>)
            : (<Navigate to={`/login`}></Navigate>)
          }
          <NavLink to={`/reels/`} className="sidebar-item">
            <a href="#" className="menuLink flex">
              <SiAirplayvideo className="icon"></SiAirplayvideo>
              <span className="sidebar-item-name">Reels</span>
            </a>

          </NavLink>


        </ul>
      </div>

      <div className="sidebar-wrapper">
        <h3 className="sidebar-title">Khác</h3>
        <ul className="sidebar-list gird">
          <li className="sidebar-item">
            <a href="#" className="menuLink flex">
              <FontAwesomeIcon icon={faShoppingBasket} className="icon"></FontAwesomeIcon>
              <span className="sidebar-item-name">Mua sắm</span>
            </a>
          </li>
          <li className="sidebar-item">
            <NavLink to="/Key">
              <a href="#" className="menuLink flex">
                <FontAwesomeIcon icon={faLanguage} className="icon"></FontAwesomeIcon>
                <span className="sidebar-item-name">Từ khóa</span>
              </a>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <a href="#" className="menuLink flex">
              <FontAwesomeIcon icon={faBookAtlas} className="icon"></FontAwesomeIcon>
              <span className="sidebar-item-name">Chính sách</span>
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
