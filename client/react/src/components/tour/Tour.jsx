import React from "react";
import "./tour.scss";
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Top from "../Body Section/Top Section/Top";
import video from "../../assets/video_travel.mp4";

const Tour = ({ tour }) => {
  const regionId = parseInt(useLocation().pathname.split("/")[3]);

  const { isLoading, error, data } = useQuery(["region"], () =>
    makeRequest.get("/regions/find/" + regionId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: regionData } = useQuery(["region"], () =>
    makeRequest.get("/regions").then((res) => {
      return res.regionData;
    })
  );

  console.log(regionData)

  return (
    <div className="mainContent">
      <div className="lisitingSection">
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

        <div className="heading flex">
          <h1>List Tours</h1>

          {error
          ? "Something went wrong!"
          : rIsLoading
          ? "loading"
          : data?.map((region) => (
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
          ? "loading"
          : data.map((tour) => (
          <div className="singleItem">
            <AiFillHeart className="icon"></AiFillHeart>
            <img  src={"/upload/" + tour.image} alt="" />
            <h3 >{tour.tour_name}</h3>
            <span>{tour.schedual}</span>
            <p>$ {tour.price}</p>
            <Link
              key={tour.tour_id}
              to={`/tourdetail/${tour.tour_id}`}
              className="btn">Đặt Ngay</Link>
          </div>
          ))}
        </div>
      
      {/* <div className="secContainer flex">
        {error
          ? "Something went wrong!"
          : isLoading
          ? "Loading..."
          : data.map((tour) => (
              
            ))}
      </div> */}

      
    </div>
    </div>
    
  );
};

export default Tour;
