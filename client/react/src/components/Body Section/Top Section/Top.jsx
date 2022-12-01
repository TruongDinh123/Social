import React from "react";
import "./top.css";
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Top = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title" >
          <h1>Welcome to VieTripSocial</h1>
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
            <img src={"../upload/" + currentUser.profilePic} alt="" />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Top;
