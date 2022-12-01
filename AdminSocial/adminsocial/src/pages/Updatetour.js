import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import tour from "../pages/tour.css";
import Button from "react-bootstrap/Button";
import Header from "./Header";
const Updatetour = () => {
  const [tour, setTour] = useState({
    Tourname: "",
    price: null,
    image: "",
    schedual: "",
    description: "",
  });

  const Navigate = useNavigate();
  const location = useLocation();

  const tourId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setTour((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/api/tours/update/" + tourId, tour);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  console.log(tour);

  return (
    <>
      <Header></Header>

      <div className="form_update">
        <h1>update the tour</h1>
        {/* <input
        className="ip_update"
        type="text"
        placeholder="Tourid"
        onChange={handleChange}
        name="tour_id"
      /> */}
        <input
          className="ip_update"
          type="text"
          placeholder="Tourname"
          onChange={handleChange}
          name="tour_name"
        />
        <input
          className="ip_update"
          type="text"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          className="ip_update"
          type="text"
          placeholder="image"
          onChange={handleChange}
          name="image"
        />
        <input
          className="ip_update"
          type="text"
          placeholder="schedual"
          onChange={handleChange}
          name="schedual"
        />
        <input
          className="ip_update"
          type="text"
          placeholder="description"
          onChange={handleChange}
          name="description"
        />

        <Button className="btn" onClick={handleClick}>
          update
        </Button>
      </div>
    </>
  );
};

export default Updatetour;
