import express from "express";
import { getListRegion } from "../controllers/region.js";
const router = express.Router();

router.get("/", getListRegion);

export default router;
