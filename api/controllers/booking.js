import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import moment from "moment";

export const getBooking = (req, res) => {
  //Todo
  const userId = req.params.userId;
  const q = `Select * FROM booking as b JOIN tour AS t ON b.tour_id = t.tour_id
  `;

  db.query(q, [userId], (err,data) => {
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
    const q = `INSERT INTO booking (booked_time, tour_id, customer_id, cmnd, full_name, phone_number)
    VALUES (?)`;
    
    const values = [
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      req.body.tour_id,
      userInfo.id,
      req.body.cmnd,
      req.body.full_name,
      req.body.phone_number,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Created booking");
    });
  console.log("/ncmnd" +req.body.cmnd)
    console.log("name" +req.body.full_name)
  console.log("phone" +req.body.phone_number)
  console.log(userInfo.id)
  console.log("tour" +req.body.tour_id)

  })
};
