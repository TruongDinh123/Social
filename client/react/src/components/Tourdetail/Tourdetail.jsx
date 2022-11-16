import "./Tourdetail.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import React from "react";
import { useContext, useState } from "react";

class Tourdetail extends React.Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Tour Title",
        img: [
          "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
          "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ],
        description: "Tour Description",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        count: 1,
      },
    ],
    index: 0,
  };

  myRef = React.createRef();

  handleTab = (index) => {
    this.setState({ index: index });
  };

  render() {
    const { products, index, setIndex } = this.state;
    console.log(products);
    return (
      <div className="mainContent">
        {products.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.img[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>

              <p>{item.description}</p>
              <p>{item.content}</p>

              <div className="thumb">
                {item.img.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))}
              </div>

              <button className="btn">Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Tourdetail;
