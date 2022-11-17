import { db } from "../connect.js";

export const getTour = (req, res) => {
  //Todo
  const tourId = req.params.tour_id
  const q = "Select * from tour where province_id = 2" 

  db.query(q, [tourId], (err,data) => {
    if(err) return res.status(500).json(err);
    return res.json(data)
  })
};