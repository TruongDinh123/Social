import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { React, useContext } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./bookingList.scss"
import { AuthContext } from "../../../context/authContext";
import { makeRequest } from "../../../axios";
import { useQuery } from "@tanstack/react-query";
import RequireLogin from "../../Others/Update/RequireLogin"
import { IoIosEye } from "react-icons/io";
const Bookingsubmit = ({ booking }) => {
  const { currentUser, setCurrrentUser } = useContext(AuthContext);

  const { err, isLoading, data } = useQuery(['booking'], () =>
    makeRequest.get('/booking?user_id=' + currentUser.id).then((res) => {
      return res.data
    })
  )
  return (
    <div className="booking-list">
      <Link to={"/"} href="#" className="btn-back">&#8249; Trở về trang chủ</Link>
      <h2 className="title">DANH SÁCH ĐẶT TOUR</h2>

      {isLoading
        ? "Bạn chưa đặt tour"
        : data?.map((booking) => (

          <table className="list-table table table-hover">
            <thead>
              <tr>
                <th scope="col">Mã đặt tour</th>
                <th scope="col">Tên Tour</th>
                <th scope="col">Số lượng </th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Chi tiết</th>

              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{booking.booking_id}</td>
                <td>{booking.tour_name}</td>
                <td>{booking.status}</td>
                <td>{booking.price}</td>
                <td className="icon">
                  <IoIosEye></IoIosEye>
                </td>
              </tr>

            </tbody>
          </table>
        ))
      }
    </div>
  );
};

export default Bookingsubmit;
