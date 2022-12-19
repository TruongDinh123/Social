import { db } from "../connect.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Users = (_, res) => {
  const q = "SELECT * FROM users";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getUser = (req, res) => {
  //Todo
  const token = req.cookies.accessToken;
  jwt.verify(token, "secretkey", (err, userId) => {
    if (err) return res.status(401).json("token is not valid");
  const q = "Select * from users where id =?";

  db.query(q, [userId.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json(data);
  }, 5000);
})
};

//Cập nhật profile
export const updateUser =  (req, res) => {
  //Todo
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "secretkey",async (err, userInfo) =>  {
    if (err) return res.status(403).json("token is not valid");
    const q =
      "Update users set `name` = ?, `email` = ?,  `city` = ? , `website` = ? , `profilePic` = ? , `coverPic` = ? where id = ?";
    db.query(
      q,
      [
        req.body.name,
        req.body.email,
        req.body.city,
        req.body.website,
        req.body.profilePic,
        req.body.coverPic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Profile Updated");
        return res.status(403).json("Can update only post");
      }
    );
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("xoa thanh cong.");
  });
};
