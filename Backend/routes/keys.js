import express from "express";
import getKey from "../controllers/key.js";

const router = express.Router();
router.get("/", getKey)

export default router