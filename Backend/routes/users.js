import express from "express";
import { getUser, updateUser, Users, deleteUser } from "../controllers/user.js";
const router = express.Router();

router.get("/find/:userId", getUser);
router.put("/", updateUser);
router.get("/", Users);
router.delete("/delete/:id", deleteUser);
export default router;
