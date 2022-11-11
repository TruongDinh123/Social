import express from "express";
import { getTours } from "../controllers/tour.js";
const router = express.Router();

router.get("/", getTours);

export default router;
