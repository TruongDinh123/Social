import express from "express";
import {
  getManyTour,
  getTourDetail,
  addTours,
  deleteTour,
  updateTour,
} from "../controllers/tour.js";
const router = express.Router();

router.get("/", getManyTour);
router.post("/addtour", addTours);
router.get("/find/:tour_id", getTourDetail);
router.delete("/delete/:tour_id", deleteTour);
router.put("/update/:tour_id", updateTour);

export default router;
