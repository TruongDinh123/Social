import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, json, Link, useLocation } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { makeRequest } from "../axios";
import { toast } from "react-toastify";
import tour from "../pages/tour.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "./Header";
const Tour = () => {
  const [Tours, setTours] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchApiData, setSearchApiData] = useState([]);
  const getTours = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/tours");
      // .then((response) => response.json())
      // .then((json) => {
      //   setTours(json);
      //   setsearchApiData(json);
      // });
      setTours(res.data.sort((a, b) => (a.tour_id > b.tour_id ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTours();
  }, [setTours]);
  useEffect(() => {}, []);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/api/tours/delete/" + id)
      .then(({ data }) => {
        const newArray = Tours.filter((tour) => tour.tour_id !== id);

        setTours(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // Tours(null);
  };

  const handleFilter = (e) => {
    if (e.target.value == "") {
      setTours(searchApiData);
    } else {
      const filterResult = searchApiData.filter((tour) =>
        tour.tour_name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setTours(filterResult);
    }
  };
  return (
    <>
      <Header></Header>
      <div className="form">
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchApiData(event.target.value);
            }}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>TourName</th>
              <th>Image</th>
              <th>description</th>
              <th>price</th>
            </tr>
          </thead>
          {Tours.filter((val) => {
            if (searchApiData == "") {
              return val;
            } else if (
              val.tour_name.toLowerCase().includes(searchApiData.toLowerCase())
            ) {
              return val;
            }
          }).map((tour) => (
            <tbody key={tour.tour_id}>
              <tr className="tour" key={tour.tour_id}>
                <td>
                  <p>{tour.tour_name}</p>
                </td>
                <td>{tour.image && <img src={tour.image}></img>}</td>
                <td>
                  <p className="textDesc">{tour.description}</p>
                </td>
                <td>
                  <span>{tour.price}</span>
                </td>
                <td>
                  <button onClick={() => handleDelete(tour.tour_id)}>
                    Delete
                  </button>
                  <button>
                    <Link className="text" to={`/update/${tour.tour_id}`}>
                      update
                    </Link>
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
        <Button ariant="secondary" size="lg">
          <Link className="btn_text" to="/add">
            Add Tour
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Tour;
