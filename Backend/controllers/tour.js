import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getManyTour = (req, res) => {
  const tourId = req.params.tour_id;
    const q = `SELECT * FROM tour`
    db.query(q, [tourId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    },3000);
};

export const getTourByRegion = (req, res) => {
  const regionId = req.params.region_id;
    const q = 
      `SELECT * FROM tour AS t INNER JOIN regions AS r 
      ON t.region_id = r.region_id
      where t.region_id = ?`
    db.query(q, [regionId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  
};

export const getListRegion = (req, res) => {
  const regionId = req.params.region_id
  const q = "SELECT * FROM regions " 
  db.query(q, [regionId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
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
    return res.status(200).json("Thêm tour thành công");
  });
  // });
};

export const deleteTour = (req, res) => {
  const q = "DELETE FROM tour WHERE `tour_id` = ?";

  db.query(q, [req.params.tour_id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Xóa thành công");
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
    return res.status(200).json("Cập nhật thành công");
  });
};
