import React from "react";
import "./listing.scss";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Listing = ({ tour }) => {
  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours").then((res) => {
      return res.data;
    })
  );

  const { data: regionData } = useQuery(["region"], () =>
    makeRequest.get("/regions").then((res) => {
      return res.data;
    })
  );

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
            <Link to={`/regions/${region.region_id} `}>
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
          ? "Something went wrong!"
          : isLoading
          ? "Loading..."
          : data?.map((tour) => (
              <div className="singleItem">
                <AiFillHeart className="icon"></AiFillHeart>
                <img  src={"../upload/" + tour.image} alt="" />
                <p>Tỉnh: {tour.province_name}</p>
                <h3 >{tour.tour_name}</h3>
                <p>$ {tour.price}</p>
                <Link
                  key={tour.tour_id}
                  to={`/Tourdetail/${tour.tour_id}`}
                  className="btn"
                >
                  Đặt Ngay
                </Link>
              </div>
            ))}
      </div>

      
    </div>
  );
};

export default Listing;
