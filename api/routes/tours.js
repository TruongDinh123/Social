import express from "express";
import { getTour} from "../controllers/tour.js";
const router = express.Router();

router.get("/", getTour);

export default router;
