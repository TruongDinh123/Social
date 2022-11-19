import React from "react";
import "./listing.scss";

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
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My listings Tours</h1>
        <button className="btn flex">Miền Bắc</button>
        <button className="btn flex">Miền Trung</button>
        <button className="btn flex">Miền Nam</button>
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
                <img
                  key={tour.tour_id}
                  src={"../upload/" + tour.image}
                  alt=""
                />
                <h3>{tour.tour_name}</h3>
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

      <div className="sales flex">
        <div className="topSales">
          <div className="heading flex">
            <h3>Top Sales</h3>
            <button className="btn flex">
              See All <BsArrowRight className="icon"></BsArrowRight>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="User Image" />
            </div>

            <div className="cardText">
              <span>100 Tour Đã Đặt</span> <br />
              <small>
                500 người dùng đã đặt{" "}
                <span className="date"> trong 1 tháng</span>
              </small>
            </div>
          </div>
        </div>

        <div className="Top Sellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRight className="icon"></BsArrowRight>
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="User Image" />
            </div>

            <div className="cardText">
              <span>100 Tour Đã Đặt</span> <br />
              <small>
                500 người dùng đã đặt{" "}
                <span className="date"> trong 1 tháng</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
