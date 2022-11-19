import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
/////////////////////////
import React from "react";
// import "./sidebar.css";
// import logo from "../../assets/Logodemo.jpg";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { CgProfile } from "react-icons/cg";
// import { SiAirplayvideo } from "react-icons/si";
// import { BiBarChartSquare, BiTrendingUp } from "react-icons/bi";
// import { BsQuestionCircle } from "react-icons/bs";
//////////////////////////
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <Link
            to={`/profile/${currentUser.userId}`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="user"
          >
            <img src={currentUser.userId} alt="" />
            <span>{currentUser.name}</span>
          </Link>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <Link
            to={`/tour/`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="item"
          >
            <img src={Groups} alt="" />
            <span> Tours</span>
          </Link>
          <Link
            to={`/login`}
            style={{ textDecoration: "none", color: "inherit" }}
            className="item"
          >
            <img src={Market} alt="" />
            <span>Đăng Nhập</span>
          </Link>
          {/* <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div> */}
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          {/* <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div> */}
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>

    ////////////////demo //////////////
    // <div className="sidebar gird">
    //   <div className="logoDiv flex">
    //     <img src={logo} alt="Image Name" />
    //     <h2>VieTripSocial.</h2>
    //   </div>

    //   <div className="menuDiv">
    //     <h3 className="divTitle">Quick Menu</h3>
    //     <ul className="menuLists gird">
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <MdOutlineTravelExplore className="icon"></MdOutlineTravelExplore>
    //           <span className="smallText">Travel Tour</span>
    //         </a>
    //       </li>
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <IoShareSocialOutline className="icon"></IoShareSocialOutline>
    //           <span className="smallText">Social</span>
    //         </a>
    //       </li>
    //       <li className="ListItem">
    //         <Link
    //           to={`/profile/${currentUser.profilePic}`}
    //           style={{ textDecoration: "none", color: "inherit" }}
    //           className="user"
    //         >
    //           <img src={currentUser.profilePic} alt="" />
    //           <span>{currentUser.name}</span>
    //         </Link>
    //         <a href="#" className="menuLink flex">
    //           <CgProfile className="icon"></CgProfile>
    //           <span className="smallText">Profile</span>
    //         </a>
    //       </li>
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <SiAirplayvideo className="icon"></SiAirplayvideo>
    //           <span className="smallText">Video shorts</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="settingDiv">
    //     <h3 className="divTitle">Settings</h3>
    //     <ul className="menuLists gird">
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <BiBarChartSquare className="icon"></BiBarChartSquare>
    //           <span className="smallText">Charts</span>
    //         </a>
    //       </li>
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <BiTrendingUp className="icon"></BiTrendingUp>
    //           <span className="smallText">Trends</span>
    //         </a>
    //       </li>
    //       <li className="ListItem">
    //         <a href="#" className="menuLink flex">
    //           <CgProfile className="icon"></CgProfile>
    //           <span className="smallText">Profile</span>
    //         </a>
    //       </li>
    //     </ul>
    //   </div>

    //   <div className="sideBarCard">
    //     <BsQuestionCircle className="icon"></BsQuestionCircle>

    //     <div className="cardContent">
    //       <div className="circle1"></div>
    //       <div className="circle2"></div>

    //       <h3>Help Center</h3>
    //       <p>Nếu bạn có vấn đề gì ở chúng tôi, xin hãy nhất vào mục giúp đỡ.</p>
    //       <button className="btn">Go to help center</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default LeftBar;
