import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";

export const getTours = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, tourInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = `select * from tours`;

    db.query(q, [tourInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};
