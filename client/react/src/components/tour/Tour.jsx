import React from "react";
import "./tour.scss";
import { useLocation } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

const Tour = ({ tour }) => {
  const regionId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["region"], () =>
    makeRequest.get("/regions/find/" + regionId).then((res) => {
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
        : data.map((region) => (
          <>
            <Link to={`/regions/${region.region_id} `}>
                <button className="btn flex">{region.region_name}</button>
            </Link>
            <div className="secContainer flex">
              <div className="singleItem">
                <AiFillHeart className="icon"></AiFillHeart>
                <img  src={"../upload/" + region.image} alt="" />
                <p>Đã có {region.like_count} người thích</p>
                <h3 >{region.tour_name}</h3>
                <p>$ {region.price}</p>
                <Link
                  key={region.tour_id}
                  to={`/Tourdetail/${region.tour_id}`}
                  className="btn"
                >
                  Đặt Ngay
                </Link>
              </div>
            </div>
            
          </>
          
        ))}
        <button className="btn flex">
              See All <BsArrowRight className="icon"></BsArrowRight>
            </button>
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
  );
};

export default Tour;
