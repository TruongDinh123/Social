import "./sidebar.css";
import logo from "../../assets/Logodemo.jpg";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { SiAirplayvideo } from "react-icons/si";
import { BiBarChartSquare, BiTrendingUp } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";
//////////////////////////////////
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="sidebar gird">
      <Link to="/" className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>VieTripSocial.</h2>
      </Link>

      <div className="menuDiv">
        <h3 className="divTitle">Quick Menu</h3>
        <ul className="menuLists gird">
          <li className="ListItem">
            <Link to= {`/tour/`}>
              <a href="#" className="menuLink flex">
              <MdOutlineTravelExplore className="icon"></MdOutlineTravelExplore>
              <span className="smallText">Travel Tour</span>
            </a>
            </Link>
          </li>
          <Link to={`/posts/`} className="ListItem">
            <a href="#" className="menuLink flex">
              <IoShareSocialOutline className="icon"></IoShareSocialOutline>
              <span className="smallText">Social</span>
            </a>
          </Link>
          <Link
            to={`/profile/${currentUser.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="ListItem"
          >
            <a href="#" className="menuLink flex">
              <CgProfile className="icon"></CgProfile>
              <span className="smallText">Profile</span>
            </a>
          </Link>
          <Link to={`/Svideo/`} className="ListItem">
            <a href="#" className="menuLink flex">
              <SiAirplayvideo className="icon"></SiAirplayvideo>
              <span className="smallText">Video shorts</span>
            </a>
          </Link>
        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">Settings</h3>
        <ul className="menuLists gird">
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <BiBarChartSquare className="icon"></BiBarChartSquare>
              <span className="smallText">Charts</span>
            </a>
          </li>
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon"></BiTrendingUp>
              <span className="smallText">Trends</span>
            </a>
          </li>
          <li className="ListItem">
            <a href="#" className="menuLink flex">
              <CgProfile className="icon"></CgProfile>
              <span className="smallText">Profile</span>
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
          <p>Nếu bạn có vấn đề gì ở chúng tôi, xin hãy nhất vào mục giúp đỡ.</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
