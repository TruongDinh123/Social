import React, { useEffect, useState } from "react";
import creitCard from "../CreitCardCheckout/creitCard.css";
import img1 from "../../assets/Tour1.jpg";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "@mui/material";
import { Button, Modal } from "bootstrap";
const CeitCard = () => {
  return (
    <div className="small-container cart-page">
      <table>
        <tr>
          <th>Tour</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src={img1} alt="" />
              <div>
                <p>Ha Noi</p>
                <small>Price: 50$</small>
                <br />
                <small>3 ngày 2 đêm</small>
                <br />
                <a href="">Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" value={1} />
          </td>
          <td>$50.00</td>
        </tr>
      </table>
      <Row className="g-2">
        <Col md>
          <Form.Control placeholder="First name" />
        </Col>
        <Col md>
          <Form.Control placeholder="Last name" />
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingSelectGrid" label="Số người đi">
            <Form.Select aria-label="Floating label select example">
              <option></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="CMND"
          />
          <label htmlFor="floatingInputCustom">CMND/CCCD</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            placeholder="SDT"
          />
          <label htmlFor="floatingPasswordCustom">Số Điện Thoại</label>
        </Form.Floating>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Danh sách tên các thành viên đi</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>tax</td>
            <td>$50.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>$50.00</td>
          </tr>
          <Link to="/listbooking/" className="btn">
            Đặt Ngay
          </Link>
        </table>
      </div>
    </div>
  );
};

export default CeitCard;
