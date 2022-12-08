import express from "express";
import {getLikes} from "../controllers/like.js";
import {addLikes} from "../controllers/like.js";
import {deleteLikes} from "../controllers/like.js";

const router = express.Router();

router.get("/", getLikes);
router.post("/", addLikes);
router.delete("/", deleteLikes);

export default router;
