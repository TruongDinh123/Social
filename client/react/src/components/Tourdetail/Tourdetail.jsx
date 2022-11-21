import "./Tourdetail.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import React from "react";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
// import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const TourDetail = ({ tour }) => {
  const postId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/find/" + postId).then((res) => {
      return res.data;
    })
  );
    
  return (
    <div className="mainContent">
      {error
        ? "something went wrong!"
        : isLoading
        ? "loading"
        : data?.map((tour) => (
            <div className="details">
              <div className="big-img">
                <img src={"../upload/" + tour?.image} alt="" />
              </div>
              <div className="box">
                <div className="row">
                  <h2>{tour?.tour_name}</h2>
                  <span>${tour?.price}</span>
                </div>

                <p>{tour?.description}</p>
                <p>{tour?.content}</p>

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

                <button className="box-btn">Yêu thích</button>
                <button className="box-btn">Đặt Tour</button>
              </div>
            </div>
          ))}
      <Tabs></Tabs>
    </div>
  );
};
export default TourDetail;
