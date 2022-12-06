import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Header from "./Header";
import { toast } from "react-toastify";

const Addtour = () => {
  const [tour, setTour] = useState({
    Tourname: "",
    price: null,
    image: "",
    schedual: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTour((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8800/api/tours/addtour", tour)
      .then(({ data }) => {
        navigate("/tour");

        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // Tours(null);
  };

  console.log(tour);

  return (
    <>
      <Header></Header>

      <div className="form">
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ID"
                onChange={handleChange}
                name="tour_id"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Tour Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tour Name"
                onChange={handleChange}
                name="tour_name"
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              onChange={handleChange}
              name="price"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label type="text" onChange={handleChange} name="schedual">
                Schedual
              </Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label
                type="text"
                onChange={handleChange}
                name="description"
              >
                Description
              </Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label type="text" onChange={handleChange} name="image">
                image
              </Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" onClick={handleClick}>
            Add
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Addtour;
