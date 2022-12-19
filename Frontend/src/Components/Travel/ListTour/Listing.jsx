import React from "react";
import "../../Travel/Tour/tour.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Listing = ({ tour }) => {
  const regionId = parseInt(useLocation().pathname.split("/")[2]);

  //Get tour

  //Get miền
  const { rIsLoading, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/").then((res) => {
      return res.data;
    })
  );
  const { isLoading, error, data: data2 } = useQuery(["region"], () =>
    makeRequest.get("/tours/regions/").then((res) => {
      return res.data;
    })
  );

  return (
    <div className="mainContent">
      <div className="categories">
        <h3 className="categories__title">
          LOẠI HÌNH
        </h3>

        <div className="categories__wrapper">
          <li className="categories__item">
            <Link to="/activities">
              <img className="icon" src="/upload/Rung.jpg" alt="" />
              <span className="name">Hoạt động tham quan</span>
            </Link>
          </li>

          <li className="categories__item">
            <Link>
              <img className="icon" src="/upload/Rung.jpg" alt="" />
              <span className="name">Tour du lịch</span>
            </Link>
          </li>

        </div>


        {/* <div className="buttons flex">
            <button className="btn">Đặt Tour</button>
            <button className="btn transparent">Mạng xã hội</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div> */}
      </div>


      <div className="listTour">

        <div className="tourContainer flex">
          <div className="region flex">
            {error
              ? "Something went wrong!"
              : isLoading
                ? "loading"
                : data2?.map((region) => (
                  <>
                    <Link to={`/regions/${region.region_id} `}>
                      <button className="btn-region flex">{region.region_name}</button>
                    </Link>
                  </>
                ))}
          </div>
          {error
            ? "Something went wrong!"
            : rIsLoading
              ? "Loading..."
              : data?.map((tour) => (
                <div className="singleItem">
                  <AiFillHeart className="icon"></AiFillHeart>
                  <img src={"../upload/" + tour.image} alt="" />
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
