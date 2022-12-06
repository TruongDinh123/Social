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
export const addTours = (req, res) => {
  // const token = req.cookies.accessToken;
  // if (!token) return res.status(401).json("not logged in!");
  // Jwt.verify(token, "secretkey", (err, tourinfo) => {
  //   if (err) return res.status(403).json("token is not valid");
  const q =
    "INSERT INTO tour (`tour_id`,`tour_name`,`price`,`image`, `schedual`,`description`) VALUES (?)";

  const values = [
    req.body.tour_id,
    req.body.tour_name,
    req.body.price,
    req.body.image,
    req.body.schedual,
    req.body.description,
  ];
  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("tours hass been created");
  });
  // });
};

export const deleteTour = (req, res) => {
  const q = "DELETE FROM tour WHERE `tour_id` = ?";

  db.query(q, [req.params.tour_id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("xoa thanh cong.");
  });
};



export const updateTour = (req, res) => {
  const q =
    "UPDATE tour SET `tour_name` = ?, `price` = ?, `image` = ?, `schedual` = ? , `description` = ? WHERE `tour_id` = ?";

  const values = [
    req.body.tour_name,
    req.body.price,
    req.body.image,
    req.body.schedual,
    req.body.description,
  ];

  db.query(q, [...values, req.params.tour_id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("update thanh cong.");
  });
};
