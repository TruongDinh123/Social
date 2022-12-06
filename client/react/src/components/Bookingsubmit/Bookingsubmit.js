import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import bookingsubmit from "../Bookingsubmit/bookingsubmit.css";
import ListGroup from "react-bootstrap/ListGroup";
import Tour1 from "../../assets/Tour1.jpg";
const Bookingsubmit = () => {
  return (
    <div className="small-container cart-page">
      <Card style={{ width: "25rem" }} className="card">
        <Card.Img variant="top" src={Tour1} />
        <Card.Body>
          <Card.Title>Bạn đã thanh toán thành công</Card.Title>
          <Card.Text>Chúc bạn có một chuyến đi thật là vui vẻ</Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Tên người đặt: Định</ListGroup.Item>
            <ListGroup.Item>SDT: 0834477007</ListGroup.Item>
            <ListGroup.Item>Tổng thành viên: 8</ListGroup.Item>
            <ListGroup.Item>Email: password</ListGroup.Item>
            <ListGroup.Item>Tổng tiền: 2000</ListGroup.Item>
          </ListGroup>
          <Button variant="primary">Trở về trang chủ</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bookingsubmit;
