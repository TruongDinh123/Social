import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getManyTour = (req, res) => {
  const tourId = req.query.tour_id;

  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, tourInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = 
      tourId !== "undefined"
      ? `select * from tour  `
      : `SELECT * FROM regions AS r JOIN provinces AS p ON p.region_id = r.region_id
      JOIN tour as t on p.province_id = t.province_id
      WHERE r.region_id = ?`
      

    db.query(q, [tourId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
export const getTourDetail = (req, res) => {
  const tourId = req.params.tour_id;
  
    const q = 
      `select * from tour where tour_id = ?`;

    db.query(q, [tourId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
  
};

