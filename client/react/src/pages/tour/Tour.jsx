import "./tour.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeRequest } from "../../axios";
import { useQuery } from "@tanstack/react-query";

const Tour = ({ tour }) => {
  return (
    <body className="body">
      <div className="container">
        <div className="main">
          <div className="category">
            <div className="categoryItem">
              <div className="card">
                {/* <img
                  src={require("../Tour/imgTour/VungTau.jpg").default}
                  alt=""
                /> */}
                <h1>{tour.name}</h1>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="itemCard">
                {/* <img
                  src={require("../Tour/imgTour/VungTau.jpg").default}
                  alt=""
                /> */}
                <h1 className="itemTitle">{tour.name}</h1>
                <p>{tour.desc}</p>
                <span className="price">{tour.price}</span>
                <button type="button">Book Tour</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Tour;
