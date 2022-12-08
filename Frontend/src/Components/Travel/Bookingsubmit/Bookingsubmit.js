import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./bookingsubmit.css"

const Bookingsubmit = () => {
  return (
    <div className="small-container cart-page">
      <Card style={{ width: "25rem" }} className="card-submit">
        <Card.Img variant="top" src={"/upload/DaLat1.jpg"} />
        <Card.Body>
          <Card.Title>Bạn đã thanh toán thành công</Card.Title>
          <Card.Text>Chúc bạn có một chuyến đi thật là vui vẻ</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tên người đặt: Ngọc Hân</ListGroup.Item>
            <ListGroup.Item>SDT: 0948911211</ListGroup.Item>
            <ListGroup.Item>CMND: 123456</ListGroup.Item>
            <ListGroup.Item>Tổng thành viên: 1</ListGroup.Item>
            <ListGroup.Item>Email: han@gmail.com</ListGroup.Item>
            <ListGroup.Item>Tổng tiền: 4900000</ListGroup.Item>
          </ListGroup>
          <Link to={"/"} className="btn">Trở về trang chủ</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bookingsubmit;
