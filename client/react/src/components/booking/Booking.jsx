import "./booking.scss"
import { useQuery,  useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import {  } from "react-router-dom";

import axios from "axios";

const Booking = ({setOpenUpdate, user}) => {
    const tourId = parseInt(useLocation().pathname.split("/")[2]);

    const { currentUser } = useContext(AuthContext);

    const [texts, setTexts] = useState({ 
        tour_id: tourId,
        customer_id: "",
        full_name: "",
        cmnd: "",    
        phone_number: "",
        gender: "",
    })


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
        mutation.mutate({...texts});
        setTexts("");
    };
    
    // const handleClick = async (e) => {
    // e.preventDefault();
    // try {
    //   await axios.post("http://localhost:8800/api/booking", texts);
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    // }
//   };

    const { isLoading, error, data } = useQuery(["tour"], () =>
        makeRequest.get("/tours/findTour/" + tourId).then((res) => {
        return res.data;
        })
    );
    return (
        <div className="mainContent">
            {/* Header của booking */}
            <div className="booking-header">
                <div className="booking-step-bar">
                    <div className="booking-step-info">Thông tin khách hàng</div>
                    <div className="booking-step-payment">Thanh toán</div>
                </div>
   
            </div>
            {/* Thông tin Tour */}
            <div className="tour-info">
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
                    
            </div>
            {/* Điền thông tin khách */}
            <div className="customer-info">
                <h3>Thông tin khách hàng</h3>
                <div className="booking-input">
                    <div className="form-group">
                        <label htmlFor="" >Mã tour: </label>
                        <input type="text"
                        readOnly={true}  
                        onChange={tourId}
                        name="tour_id"
                        placeholder={tourId}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" >Họ tên: </label>
                        <input type="text"  
                        onChange={handleChange}
                        name="full_name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="" >CMND/CCCD:</label>
                        <input type="text" 
                        name="cmnd"
                        onChange={handleChange}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Số điện thoại: </label>
                        <input type="text" 
                        name="phone_number"
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Giới tính: </label>
                        <select name="gender" id="">
                            <option value={texts}>Nam</option>
                            <option value={texts}>Nữ</option>
                    </select>
                    </div>

                    <div className="form-add">
                        <label>Thêm khách hàng</label>
                        <div >
                            <table className="list-table">
                                <thead>
                                    <tr>
                                        <th style={{width: 120 + 'em'}}>
                                            Họ tên
                                        </th>

                                        <th style={{width: 80 + 'em'}}>
                                            CMND
                                        </th>

                                        <th style={{width: 80 + 'em'}}>
                                            SĐT
                                        </th>

                                        <th style={{width: 50 + 'em'}}>
                                            Giới tính
                                        </th>
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
                    </div>

                    <div style={{display: "flex"}}>
                        <button className="box-btn"
                        onClick={handleClick}>Đặt tour</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking