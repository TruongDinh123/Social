import { db } from "../connect.js";
import Jwt from "jsonwebtoken";
import moment from "moment";
export const getPosts = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = `select p.*, u.id AS userId, name, profilePic from posts AS p JOIN users AS u ON (u.id = p.userId)
    LEFT JOIN relationships AS r ON (p.userId = r.followedUserId) WHERE r.followerUserId = ? OR p.userId = ?
    ORDER BY p.createAt DESC`;

    db.query(q, [userInfo.id, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  Jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = "INSERT INTO posts (`desc`,`img`,`createAt`,`userId`) VALUES (?)";

    const values = [
      req.body.desc,
      req.body.img,
      moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      userInfo.id,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("post hass been created");
    });
  });
};
