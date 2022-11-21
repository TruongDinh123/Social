import { db } from "../connect.js";

export const getProvince = (req, res) => {
  //Todo
  const provinceId = req.params.province_id
  const q = "Select * from provinces" 

  db.query(q, [provinceId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};