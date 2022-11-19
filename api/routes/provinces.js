import express from "express";
import { getProvince} from "../controllers/province.js";
const router = express.Router();

router.get("/", getProvince);

export default router;
