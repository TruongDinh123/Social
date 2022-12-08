import React, { useState } from "react";
import "./top.css";
import { AuthContext } from "../../../Auth/authContext";
import { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";
import { GoogleLogout, GoogleLogin } from "react-google-login";
const clientId =
  "232849903347-raa0f7579qbi3ddm3fvlnroicqsf4uqs.apps.googleusercontent.com";

const Top = (res) => {
  const { currentUser } = useContext(AuthContext);

  // const logout = () => {
  //   window.open("http://localhost:3000/login", "_self");
  // };

  // const [profile, setprofile] = useState({});

  // const handcallbackres = (res) => {
  //   console.log("encoded jwt id tokenL" + res.credential);
  //   var userobj = jwt_decode(res.credential);
  //   console.log(userobj);
  //   setprofile(userobj);
  // };

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
  const onSuccess = () => {
    console.log("log out success", Object);
    localStorage.clear();
    window.open("http://localhost:3000/login", "_self");
  };

  if (localStorage.getItem("googleEmail") == null) {
    return (
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title" to={`/profile/${currentUser?.profilePic}`}>
            <h3>VieTripSocial</h3>
            <p>Xin chào {currentUser?.name} ! </p>
          </div>

          <div className="serchbar flex">
            <input type="text" placeholder="Tìm kiếm" />
            <BiSearchAlt className="icon"></BiSearchAlt>
          </div>

          <div className="userDiv flex">
            <TbMessageCircle className="icon"></TbMessageCircle>
            <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
            <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
            <Link to={`/profile/${currentUser.id}`}>
            <div className="userImage">
              <img src={"../upload/" + currentUser?.profilePic} alt="" />
            </div>

            </Link>
            {currentUser.id == null
                 ? <Link to={`/login`}>   
                 <button className="btn">Đăng nhập</button>
                </Link>
                 : <Link to={`/login`}>
                  <button className="btn">Đăng xuất</button>
                  
                 </Link>
            }
                  {/* {currentUser !== null
                    ? <Link to="">
                      <button className="btn">
                        Đăng xuất
                      </button>
                    </Link>
                    : <Link to="/login">
                      <button className="btn">
                      Đăng nhập
                    </button>
                    </Link>
                  } */}
                  
                
                {/* <GoogleLogin
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}/> */}
                
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="topSection">
        <div className="headerSection flex">
          <div className="title" to={`/profile/${currentUser.profilePic}`}>
            <h1>VieTripSocial</h1>
            <p>Xin chào {currentUser.name} !</p>
          </div>

          <div className="serchbar flex">
            <input type="text" placeholder="Tìm kiếm" />
            <BiSearchAlt className="icon"></BiSearchAlt>
          </div>

          <div className="userDiv flex">
            <TbMessageCircle className="icon"></TbMessageCircle>
            <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
            <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
            <div className="userImage">
              <img src={"../upload/" + currentUser.profilePic} alt="" />
            </div>
            <div id="signOutButton">
              <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={responseGoogleLogout}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Top;
