import {db} from "../connect.js";
import jwt from "jsonwebtoken";

export const getLikes = (req, res) => {
    const q = `select userId FROM likes where postId =?`; 

    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data?.map(like => like.userId));
    });
}

export const addLikes = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = "INSERT INTO likes (`userId`, `postId`) VALUES (?)";

    const values = [
      userInfo.id,
      req.body.postId
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been likes");
    });
  });
};

export const deleteLikes = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("not logged in!");
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid");
    const q = "DELETE FROM likes WHERE `userId` = ? AND `postId` = ?";

    db.query(q, [userInfo.id, req.params.postId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Post has been dislikes");
    });
  });
};