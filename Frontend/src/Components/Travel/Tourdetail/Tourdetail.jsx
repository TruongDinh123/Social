import "./Tourdetail.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import React from "react";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Tabs from "../../Others/Tabs/Tabs";
import { AuthContext } from "../../../context/authContext";
import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCircleCheck, faShoppingBag } from "@fortawesome/free-solid-svg-icons";


const TourDetail = ({ tour }) => {
  const postId = parseInt(useLocation().pathname.split("/")[2]);
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/findTour/" + postId).then((res) => {
      return res.data;
    })
  );
  console.log(data)

  return (
    <div className="mainContent">
      <Link to={"/tours"} href="#" className="btn-back">&#8249; Trở lại</Link>

      <ul class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Tour</a></li>
        <li class="breadcrumb-item active">Chi tiết Tour</li>
      </ul>
      {error
        ? "Something went wrong!"
        : isLoading
          ? "loading"
          : data?.map((tour) => (
            <div className="details">
              <div className="big-img">
                <img src={"/upload/" + tour.image} alt="" />
              </div>
              <div className="box">
                <div className="row">
                  <h2>{tour.tour_name}</h2>
                  <span>Giá tour: {tour.price} VNĐ</span>
                </div>

                <p>{tour.description}</p>

                <div className="thumb">
                  {/* {tour?.tour_image_id?.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))} */}
                </div>

                <button className="box-btn">
                  <FontAwesomeIcon icon={faHeartCircleCheck} />
                  Yêu thích</button>


                {currentUser.id !== null
                  ? <Link to={`/tours/${tour.tour_id}/booking/`}>
                    <button className="box-btn">
                      <FontAwesomeIcon icon={faShoppingBag} />
                      Đặt tour</button>
                  </Link>
                  : <Navigate to={`/login`}></Navigate>
                }
              </div>
            </div>
          ))}
      <Tabs></Tabs>
    </div>
  );
};
export default TourDetail;
