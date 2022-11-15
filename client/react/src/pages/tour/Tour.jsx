import "./tour.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";
import { BsArrowRight } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
/////////////////////
// import Tour1 from "../../../assets/Tour1.jpg";
// import user from "../../../assets/user.jpg";

//sai roi đừng xem phần này nha//
const Tour = ({ tour }) => {
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
        <div className="singleItem">
          <AiFillHeart className="icon"></AiFillHeart>
          {/* <img src={Tour1} alt="Image Name" /> */}
          <h3>Hội An</h3>
          <button className="btn">Đặt Ngay</button>
        </div>
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
              {/* <img src={user} alt="User Image" /> */}
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
              {/* <img src={user} alt="User Image" /> */}
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

export default Tour;
