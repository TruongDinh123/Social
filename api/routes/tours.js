import express from "express";
import { getManyTour, getTourDetail } from "../controllers/tour.js";
const router = express.Router();

router.get("/", getManyTour);
router.get("/find/:tour_id", getTourDetail);


export default router;
