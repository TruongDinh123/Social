import express from "express";
import { getBooking, addBooking } from "../controllers/booking.js";
const router = express.Router();

router.get("/findBooking/:booking_id", getBooking);
router.post("/", addBooking);

export default router;
