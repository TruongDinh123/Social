import express from "express";
import { getBooking, addBooking } from "../controllers/booking.js";
const router = express.Router();

router.get("/find/:tour_id/booking", getBooking);
router.post("/", addBooking);

export default router;
