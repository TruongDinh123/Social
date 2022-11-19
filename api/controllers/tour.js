import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getManyTour = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, tourInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = 
      
      `select * from tour`;

    db.query(q, [tourInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const getTourDetail = (req, res) => {
  const tourId = req.params.tour_id;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, tourInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = 
      
      `select * from tour where tour_id = ?`;

    db.query(q, [tourId], (err, data) => {
      if (err) return res.status(500).json(err);

      return res.status(200).json(data);
    });
            console.log(tourId)

  });
};

