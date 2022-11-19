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

  const { isLoading, error, data } = useQuery(["tour", "tour_images"], () =>
    makeRequest.get("/tours/find/" + postId).then((res) => {
      return res.data;
    })
  );

  console.log(data);

  // class Tourdetail extends React.Component {

  // state = {
  //   products: [
  //     {
  //       _id: "1",
  //       title: "Tour Title",
  //       img: [
  //         "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //         "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //       ],
  //       description: "Tour Description",
  //       content:
  //         "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
  //       price: 23,
  //       count: 1,
  //     },
  //   ],
  //   index: 0,
  // };

  // myRef = React.createRef();

  // handleTab = (index) => {
  //   this.setState({ index: index });
  // };

  // render() {
  //   const { products, index, setIndex } = this.state;
  //   console.log(products);
  return (
    <div className="mainContent">
      {error
        ? "something went wrong!"
        : isLoading
        ? "loading"
        : data.map((tour) => (
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
                  {/* {tour?.tour_image_id.map((img, index) => (
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
