import { db } from "../connect.js";
import Jwt from "jsonwebtoken";

export const getListRegion = (req, res) => {
  //Todo
  const regionId = req.params.region_id
  const q = "SELECT * FROM regions" 

  db.query(q, [regionId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};

export const getTourOfRegion = (req, res) => {
  const regionId = req.params.region_id;
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, regionInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = 
      
      `SELECT * FROM regions AS r JOIN provinces AS p ON p.region_id = r.region_id
      JOIN tour as t on p.province_id = t.province_id
      WHERE r.region_id = ? `
    db.query(q, [regionId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};