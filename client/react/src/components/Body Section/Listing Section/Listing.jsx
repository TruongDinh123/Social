import React from "react";
import "./listing.scss";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Top from "../Top Section/Top";
import Tour from "../../tour/Tour"
import { BsQuestionCircle } from "react-icons/bs";
import video from "../../../assets/video_travel.mp4";
import user from "../../../assets/user.jpg";
import user2 from "../../../assets/user2.jpg";
import { useLocation } from "react-router-dom";

const Listing = ({ tour }) => {
    const regionId = parseInt(useLocation().pathname.split("/")[2]);

  const { rIsLoading, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/").then((res) => {
      return res.data;
    })
  );
  const { isLoading, error, data: data2 } = useQuery(["region"], () =>
    makeRequest.get("/tours/region").then((res) => {
      return res.data;
    })
  );

  console.log(data)
  

  // const {data:regionData } = useQuery(["tour"], () =>
  //   makeRequest.get("/tours/").then((res) => {
  //     return res.data;
  //   })
  // );

  // const { data: tourOfRegionData } = useQuery(["region"], () =>
  //   makeRequest.get("/findRegion/" + regionId).then((res) => {
  //     return res.data;
  //   })
  // );

  
  // console.log(data)
  // console.log(regionData)
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
          : data2?.map((region) => (
            <>
              <Link to={`/regions/${region.region_id} `}>
                  <button className="btn flex">{region.region_name}</button>
              </Link>
            </>
          ))}
        </div>
      
        <div className="secContainer flex">
          {error
            ? "Something went wrong!"
            : rIsLoading
            ? "Loading..."
            : data?.map((tour) => (
                <div className="singleItem">
                  <AiFillHeart className="icon"></AiFillHeart>
                  <img  src={"../upload/" + tour.image} alt="" />
                  <h3 >{tour.tour_name}</h3>
                  <span>{tour.schedual}</span>
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
