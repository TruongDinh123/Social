
import "./home.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import ImageSlider from "./ImageSlider"
import { DarkModeContext } from "../../../context/darkModeContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const dark = useContext(DarkModeContext)
  const slides = [
    { url: "/upload/Rung.jpg" },
    { url: "/upload/MPL.jpg" },
    { url: "/upload/AnGiang.jpg" },

  ]
  console.log(currentUser)
  return (
    <div>
      <div className="home">
        <div className="slideContainer">
          <ImageSlider slides={slides}></ImageSlider>
        </div>

        <span className={dark}>Chữ</span>
      </div>

    </div>
  );
};

export default Home;
