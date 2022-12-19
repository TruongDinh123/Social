import "./booking.scss";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { AuthContext } from "../../../context/authContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";

const Booking = ({ user }) => {
  const tourId = parseInt(useLocation().pathname.split("/")[2]);
  // const { data : booking  } = useQuery(["booking"], () =>
  //   makeRequest.get("/booking/findBooking/").then((res) => {
  //     return res.data;
  //   })
  // );

  const { currentUser } = useContext(AuthContext);

  const [texts, setTexts] = useState({
    tour_id: tourId,
    customer_id: "",
    full_name: "",
    cmnd: "",
    phone_number: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newBooking) => {
      return makeRequest.post("/booking", newBooking);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("[booking]");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ ...texts });
    navigate("/booking-list/")
    setTexts("");
  };

  const { isLoading, error, data } = useQuery(["tour"], () =>
    makeRequest.get("/tours/findTour/" + tourId).then((res) => {
      return res.data;
    })
  );
  return (

    <div className="mainContent">
      {/* Header của booking */}
      {error
        ? "Something went wrong!"
        : isLoading
          ? "loading"
          : data?.map((tour) => (
            <div className="small-container cart-page">
              <table>
                <tr>
                  <th>Tour</th>
                  <th>Số lượng</th>
                  <th>Đơn giá</th>
                </tr>
                <tr>
                  <td>
                    <div className="cart-info">
                      <img src={"/upload/" + tour.image} alt="" />
                      <div className="tour-details">
                        <h5>Mã tour: {tour.tour_id}</h5>
                        <p>
                          <span className="tour-col-4">Tour du lịch:</span>
                          <span className="tour-col-8">{tour.tour_name}</span>
                        </p>
                        <p>
                          <span className="tour-col-4">Ngày khởi hành:</span>
                          <span className="tour-col-8">{tour.go_time}</span>
                        </p>
                        <p>
                          <span className="tour-col-4">Lịch trình:</span>
                          <span className="tour-col-8">{tour.schedual}</span>
                        </p>
                        <div className="remove">
                          <a href="">Xóa</a>
                        </div>

                      </div>
                    </div>
                  </td>
                  <td>
                    <input type="number" value={1} />
                  </td>
                  <td>{tour.price} VNĐ</td>
                </tr>
              </table>
              <Row className="g-2">
                <Form.Floating>
                  <Form.Control
                    onChange={handleChange}
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="SDT"
                  />
                  <label name="full_name" htmlFor="floatingPasswordCustom">Họ tên: </label>
                </Form.Floating>

                <Form.Floating>
                  <Form.Control
                    onChange={handleChange}
                    name="cmnd"
                    id="floatingPasswordCustom"
                    type="text"
                    placeholder="SDT"
                  />
                  <label htmlFor="floatingPasswordCustom">CMND: </label>
                </Form.Floating>

                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Email: ">
                    <Form.Control
                      name="email"
                      onChange={handleChange}
                      type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Số điện thoại:">
                    <Form.Control
                      name="phone_number"
                      onChange={handleChange}
                      type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
                <div className="form-group">
                  <label htmlFor="">Giới tính: </label>
                  <select onChange={handleChange} name="gender" id="">
                    <option value={'Nam'}>Nam</option>
                    <option value={'Nữ'}>Nữ</option>
                  </select>
                </div>
                {/* <div className="form-add">
            <h5>Thêm khách hàng</h5>
            <div>
              <table className="list-table">
                <thead>
                  <tr>
                    <th style={{ width: 120 + "em" }}>Họ tên</th>

                    <th style={{ width: 80 + "em" }}>CMND</th>

                    <th style={{ width: 80 + "em" }}>SĐT</th>

                    <th style={{ width: 50 + "em" }}>Giới tính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
              </Row>

              <div className="total-price">
                <table>
                  <tr>
                    <td>Đơn giá:</td>
                    <td>{tour.price}</td>
                  </tr>
                  <tr>
                    <td>Thuế</td>
                    <td>0 </td>
                  </tr>
                  <tr>
                    <td>Tổng cộng:</td>
                    <td>{tour.price} VNĐ</td>
                  </tr>
                  {/* <Link to={`/booking-submit/`} > */}
                  <button onClick={handleClick}
                    className="btn"
                  >Đặt Ngay</button>

                  {/* </Link> */}
                </table>
              </div>
            </div>
          ))}

      {/* <div className="booking-header">
        <div className="booking-step-bar">
          <div className="booking-step-info">Thông tin khách hàng</div>
          <div className="booking-step-payment">Thanh toán</div>
        </div>
      </div> */}
      {/* Thông tin Tour */}
      {/* <div className="tour-info">
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading"
          : data.map((tour) => (
              <div className="row">
                <div className="tour-details">
                  <h3>Thông tin Tour</h3>
                  <p>
                    <span className="tour-col-4">Tour du lịch:</span>
                    <span className="tour-col-8">{tour.tour_name}</span>
                  </p>
                  <p>
                    <span className="tour-col-4">Ngày khởi hành:</span>
                    <span className="tour-col-8">{tour.go_time}</span>
                  </p>
                  <p>
                    <span className="tour-col-4">Lịch trình:</span>
                    <span className="tour-col-8">{tour.schedual}</span>
                  </p>
                  <p>
                    <span className="tour-col-4">Giá vé:</span>
                    <span className="tour-col-8">{tour.price} VNĐ/ khách</span>
                  </p>
                </div>
              </div>
            ))}
      </div> */}
      {/* Điền thông tin khách */}
      {/* <div className="customer-info">
        <h3>Thông tin khách hàng</h3>
        <div className="booking-input">
          <div className="form-group">
            <label htmlFor="">Mã tour: </label>
            <input
              type="text"
              readOnly={true}
              onChange={tourId}
              name="tour_id"
              placeholder={tourId}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Họ tên: </label>
            <input type="text" onChange={handleChange} name="full_name" />
          </div>

          <div className="form-group">
            <label htmlFor="">CMND/CCCD:</label>
            <input type="text" name="cmnd" onChange={handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="">Số điện thoại: </label>
            <input type="text" name="phone_number" onChange={handleChange} />
          </div>

                    <div className="form-group">
                        <label htmlFor="">Giới tính: </label>
                        <select onChange={handleChange} name="gender" id="">
                            <option >Nam</option>
                            <option value={'Nam'}>Nam</option>
                            <option value={'Nữ'}>Nữ</option>
                    </select>
                    </div>

          {/* <div className="form-add">
            <label>Thêm khách hàng</label>
            <div>
              <table className="list-table">
                <thead>
                  <tr>
                    <th style={{ width: 120 + "em" }}>Họ tên</th>

                    <th style={{ width: 80 + "em" }}>CMND</th>

                    <th style={{ width: 80 + "em" }}>SĐT</th>

                    <th style={{ width: 50 + "em" }}>Giới tính</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>

                    <td>
                      <input type="text" name="name" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
      {/* <Link to="/ceitCard/">
            <div style={{ display: "flex" }}>
              <button className="box-btn" onClick={handleClick}>
                Đặt tour
              </button>
            </div>
          </Link> */}
    </div>

  );
};

export default Booking;
