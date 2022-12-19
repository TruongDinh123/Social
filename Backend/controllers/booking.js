import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getBookings = (req, res) => {
  //Todo
  const userID = req.query.user_id;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Chưa đăng nhập!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
  const q = `Select b.*, t.*, u.id FROM booking as b 
  JOIN users as u ON b.user_id = u.id 
  JOIN tour as t ON t.tour_id = b.tour_id 
  WHERE b.user_id = ?
  ORDER BY b.booked_time DESC`;

  const values =
      userID !== "undefined" ? [userID] : [userInfo.id];
  db.query(q, [values], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  }, 5000)
})
};

export const getBookingById = (req, res) => {
  //Todo
  const bookingId = req.params.booking_id;
  const q = `Select * FROM booking where booking_id = ?`;

  db.query(q, [bookingId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};

//Cập nhật profile
export const addBooking = (req, res) => {

  const userId = req.params.id;

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = `INSERT INTO booking (booked_time, tour_id, user_id, cmnd, full_name, phone_number, gender) VALUES (?)`
    
    const values = [
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.tour_id,
      userInfo.id,
      req.body.cmnd,
      req.body.full_name,
      req.body.phone_number,
      req.body.gender,

    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Created booking");
    });
  console.log("gender" +req.body.gender)
   

  })
};
