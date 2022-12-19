import express from "express";
import { getBookings, getBookingById, addBooking } from "../controllers/booking.js";
const router = express.Router();

router.get("/", getBookings);
router.get("/find/:booking_id", getBookingById);
router.post("/", addBooking);

export default router;
