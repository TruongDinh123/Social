import React from "react";
import "./listing.css";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
/////////////////////
import Tour1 from "../../../assets/Tour1.jpg";
import user from "../../../assets/user.jpg";
const Listing = ({ tour }) => {
  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours").then((res) => {
      return res.data;
    })
  );

  const { data: regionData } = useQuery(["regions"], () =>
    makeRequest.get("/regions").then((res) => {
      return res.data;
    })
  );
      console.log(regionData)

  return (
    <div className="lisitingSection">
      
      <div className="heading flex">
        <h1>List Tours</h1>

        {error
        ? "something went wrong!"
        : isLoading
        ? "loading"
        : regionData.map((region) => (
          <>
            <Link to={`/Regions/${region.region_id} `}>
                <button className="btn flex">{region.region_name}</button>
            </Link>
          </>
        ))}
        <button className="btn flex">
              See All <BsArrowRight className="icon"></BsArrowRight>
            </button>
      </div>
      

      <div className="secContainer flex">
        {error
          ? "something went wrong!"
          : isLoading
          ? "loading"
          : data.map((tour) => (
              <div className="singleItem">
                <AiFillHeart className="icon"></AiFillHeart>
                <img  src={"../upload/" + tour.image} alt="" />
                <p>Đã có {tour.like_count} người thích</p>
                <h3 >{tour.tour_name}</h3>
                <p>$ {tour.price}</p>
                <Link key={tour.tour_id} to={`/Tourdetail/${tour.tour_id}`} className="btn">
                  Đặt Ngay
                </Link>
              </div>
            ))}
      </div>

      
    </div>
  );
};

export default Listing;
