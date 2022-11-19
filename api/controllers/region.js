import { db } from "../connect.js";
import Jwt from "jsonwebtoken";

export const getProvinceOfRegion = (req, res) => {
  //Todo
  const provinceId = req.params.province_id
  const q = "SELECT * FROM regions AS r join provinces AS p ON p.region_id = r.region_id WHERE r.region_id = 1" 

  db.query(q, [provinceId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};

export const getListRegion = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, tourInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = 
      
      `select * from regions`;

    db.query(q, [tourInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};