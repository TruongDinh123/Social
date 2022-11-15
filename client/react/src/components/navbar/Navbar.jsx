import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
//////////////////////////////////////////////////////////
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
////////////////////////////////////
// import video from "../../../assets/video_travel.mp4";
// import user from "../../../assets/user.jpg";
// import user2 from "../../../assets/user2.jpg";
const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      {/* <div className="headerSection flex">
        <div className="title">
          <h1>WelCom to VieTripSocial</h1>
          <p>Hello Dinh, Welcom back!</p>
        </div>

        <div className="serchbar flex">
          <input type="text" placeholder="Search" />
          <BiSearchAlt className="icon"></BiSearchAlt>
        </div>

        <div className="userDiv flex">
          <TbMessageCircle className="icon"></TbMessageCircle>
          <IoMdNotificationsOutline className="icon"></IoMdNotificationsOutline>

          <div className="userImage">
            {/* <img src={user} alt="User Image" /> */}
      {/* </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>add to Tours</h1>
          <p>
            Du lịch giúp cho bạn sẽ trải nghiệm những thứ quý giá của bản thân!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Booked tours</button>
          </div>
          <div className="videoDiv">
            {/* <video src={video} autoPlay loop muted></video> */}
      {/* </div>
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

            <div className="imgDiv"> */}
      {/* <img src={user2} alt="Image Name" /> */}
      {/* </div>

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
      </div>  */}
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>VieTravel</span>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Link
          to={`/profile/${currentUser.profilePic}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span className="name">{currentUser.name}</span>
        </Link>
        <Link
          to={`/profile/${currentUser.profilePic}`}
          style={{ textDecoration: "none", color: "inherit" }}
          className="user"
        >
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
