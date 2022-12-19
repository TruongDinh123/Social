import React, { useState } from "react";
import "./navbar.scss";
import { AuthContext } from "../../../context/authContext";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";
import { BiLogOut, BiSearchAlt } from "react-icons/bi";
import { TbHelp, TbMessageCircle } from "react-icons/tb";
import { IoMdHelp, IoMdHelpBuoy, IoMdLogOut, IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import { CgDarkMode } from "react-icons/cg";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";
const clientId =
  "232849903347-raa0f7579qbi3ddm3fvlnroicqsf4uqs.apps.googleusercontent.com";

const Top = ({ res }) => {
  const { currentUser, logout } = useContext(AuthContext);
  const { toggle, darkMode } = useContext(DarkModeContext);


  const navigate = useNavigate();

  const responseGoogle = (googleUser) => {
    console.log(JSON.stringify(googleUser));
    const idToken = googleUser.getAuthResponse().id_token;
    const googleEmail = googleUser.profileObj.email;
    console.log("The id_token is " + idToken);
    localStorage.setItem("idToken", idToken);
    localStorage.setItem("googleEmail", googleEmail);
    this.props.history.push(this.props.onLogin);
  };

  const responseGoogleLogout = (response) => {
    console.log("Logout response:" + JSON.stringify(response));
    localStorage.removeItem("idToken");
    localStorage.removeItem("googleEmail");
    console.log("Logged out");
    this.props.history.push(this.props.onLogout);
  };

  // if (localStorage.getItem("googleEmail") == null) {
  //   return (
  //     <div className="top">

  //         <div className="title" >
  //           <Link to="/" className="logoDiv flex">
  //         <img src="/upload/logo.jpg" alt="Image Name" />
  //       </Link>
  //         </div>

  //         <div className="serchbar flex">
  //           <input type="text" placeholder="Tìm kiếm" />
  //           <BiSearchAlt className="icon"></BiSearchAlt>
  //         </div>

  //         <div className="userDiv flex">
  //           <TbMessageCircle className="icon"></TbMessageCircle>
  //           <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
  //           <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
  //           <Link to={`/profile/${currentUser.id}`}>
  //           <div className="userImage">
  //             <img src={"../upload/" + currentUser?.profilePic} alt="" />
  //           </div>

  //           </Link>
  //           {currentUser.id == null
  //                ? <Link to={`/login`}>   
  //                <button className="btn">Đăng nhập</button>
  //               </Link>
  //                : <Link to={`/login`}>
  //                 <button className="btn">Đăng xuất</button>

  //                </Link>
  //           }
  //                 {/* {currentUser !== null
  //                   ? <Link to="">
  //                     <button className="btn">
  //                       Đăng xuất
  //                     </button>
  //                   </Link>
  //                   : <Link to="/login">
  //                     <button className="btn">
  //                     Đăng nhập
  //                   </button>
  //                   </Link>
  //                 } */}


  //               {/* <GoogleLogin
  //               buttonText="Login"
  //               onSuccess={responseGoogle}
  //               onFailure={responseGoogle}
  //               cookiePolicy={'single_host_origin'}/> */}

  //         </div>
  //       </div>
  //   );
  // } 

  return (
    <div className="navbar">
      <div className="navbar_logo flex" to={`/profile/${currentUser.profilePic}`}>
        <Link to="/" >
          <img src="/upload/logo.jpg" alt="Image Name" />
        </Link>
      </div>

      <div className="navbar_search flex">
        <input type="text" placeholder="Tìm kiếm" />
        <BiSearchAlt className="icon"></BiSearchAlt>
      </div>

      <div className="navbar_action flex">
        {darkMode ? ( //Chế độ sáng, tối
          <WbSunnyOutlinedIcon
            onClick={toggle} className="icon">
          </WbSunnyOutlinedIcon>
        ) : (
          <DarkModeOutlinedIcon
            onClick={toggle} className="icon">
          </DarkModeOutlinedIcon>
        )

        }
        <TbMessageCircle className="icon"></TbMessageCircle>
        <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
        <Link to={'/booking-list'}>

          <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
        </Link>
        <div className="userImage">
          <img src={"../upload/" + currentUser.profilePic} alt="" />
          <div className="userImage-wrapper">
            <li className="userImage-name"><h2>{currentUser.name}</h2></li>
            <li className="userImage-item">
              <FaUserEdit></FaUserEdit>
              Cập nhật hồ sơ</li>
            <li className="userImage-item">
              <TbHelp></TbHelp>
              Trợ giúp & hỗ trợ</li>
            <li className="userImage-item">
              <BiLogOut></BiLogOut>
              {currentUser ?
                <button style={{ padding: 0, margin: 0, background: "inherit", border: "none" }} onClick={logout} >Đăng xuất</button>
                :
                <Link to={`/login`}>
                  <button >Đăng nhập</button>
                </Link>
              }
            </li>
          </div>
        </div>

      </div>
    </div>
  );

};

export default Top;
