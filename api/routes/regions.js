import express from "express";
import { getTourOfRegion, getListRegion} from "../controllers/region.js";
const router = express.Router();

router.get("/find/:region_id", getTourOfRegion);
router.get("/", getListRegion);

export default router;
