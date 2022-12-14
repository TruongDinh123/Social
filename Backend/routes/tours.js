import express from "express";
import {
  getManyTour,
  getTourDetail,
  addTours,
  deleteTour,
  updateTour,
  getListRegion,
  getTourByRegion,
  
} from "../controllers/tour.js";
const router = express.Router();

router.get("/", getManyTour);
router.get("/find/:region_id", getTourByRegion);
router.get("/regions", getListRegion);

router.post("/addtour", addTours);
router.get("/findTour/:tour_id", getTourDetail);
router.delete("/delete/:tour_id", deleteTour);
router.put("/update/:tour_id", updateTour);

export default router;
