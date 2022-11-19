import React from "react";
import "./top.css";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
////////////////////////////////////
import video from "../../../assets/video_travel.mp4";
import user from "../../../assets/user.jpg";
import user2 from "../../../assets/user2.jpg";
const Top = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title" to={`/profile/${currentUser.profilePic}`}>
          <h1>WelCom to VieTripSocial</h1>
          <p>Hello {currentUser.name}, Welcom back!</p>
        </div>

        <div className="serchbar flex">
          <input type="text" placeholder="Search" />
          <BiSearchAlt className="icon"></BiSearchAlt>
        </div>

        <div className="userDiv flex">
          <TbMessageCircle className="icon"></TbMessageCircle>
          <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>
          <AiOutlineShoppingCart className="icon"></AiOutlineShoppingCart>
          <div className="userImage">
            <img src={user} alt="User Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <p>
            "Những ngày mà đôi chân chưa mỏi, có tiền cũng khó mà mua"
          </p>

          <div className="buttons flex">
            <button className="btn">Đặt Tour</button>
            <button className="btn transparent">Mạng xã hội</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>my start</h1>
              <div className="flex">
                <span>
                  Today <br></br> <small>4 tour da dat thanh cong</small>
                </span>
                <span>
                  This Month <br></br> <small>127 tour da dat thanh cong</small>
                </span>
              </div>

              <span className="flex link">
                Go to my tours
                <BsArrowRight className="icon"></BsArrowRight>
              </span>
            </div>

            <div className="imgDiv">
              <img src={user2} alt="Image Name" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircle className="icon"></BsQuestionCircle>

              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>Help Center</h3>
                <p>
                  Nếu bạn có vấn đề gì ở chúng tôi, xin hãy nhất vào mục giúp
                  đỡ.
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
