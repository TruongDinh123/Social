import React from "react";
import "./listing.scss";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Top from "../Top Section/Top";
import { BsQuestionCircle } from "react-icons/bs";
import video from "../../../assets/video_travel.mp4";
import user from "../../../assets/user.jpg";
import user2 from "../../../assets/user2.jpg";
const Listing = ({ tour }) => {
  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/").then((res) => {
      return res.data;
    })
  );

  const { data: regionData } = useQuery(["region"], () =>
    makeRequest.get("/regions/").then((res) => {
      return res.data;
    })
  );

  console.log(tour)
  return (
    <div className="mainContent">
      <Top></Top>
      <div className="cardSection flex">
        <div className="rightCard flex">
          <p>
            "Những ngày đôi chân chưa mỏi, có tiền cũng khó mà mua"
          </p>

          <div className="buttons flex">
             <button className="btn">Đặt Tour</button>
            <button className="btn transparent">Mạng xã hội</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        
      </div>
      <div className="lisitingSection">
      
        <div className="heading flex">
          <h1>List Tours</h1>

          {error
          ? "Something went wrong!"
          : isLoading
          ? "loading"
          : regionData?.map((region) => (
            <>
              <Link to={`/tour/regions/${region.region_id} `}>
                  <button className="btn flex">{region.region_name}</button>
              </Link>
            </>
          ))}
        </div>
      
        <div className="secContainer flex">
          {error
            ? "Something went wrong!"
            : isLoading
            ? "Loading..."
            : data.map((tour) => (
                <div className="singleItem">
                  <AiFillHeart className="icon"></AiFillHeart>
                  <img  src={"../upload/" + tour.image} alt="" />
                  <p>Tỉnh: {tour.province_name}</p>
                  <h3 >{tour.tour_name}</h3>
                  <p>$ {tour.price}</p>
                  <Link
                    key={tour.tour_id}
                    to={`/tourdetail/${tour.tour_id}`}
                    className="btn"
                  >
                    Đặt Ngay
                  </Link>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
};

export default Listing;
