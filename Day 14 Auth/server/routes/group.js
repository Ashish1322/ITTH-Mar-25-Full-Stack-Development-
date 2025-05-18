import express from "express";
import { createGroup } from "../controllers/group.js";
import { isLoggedIn } from "../middlewares/auth.js";
const router = express.Router();

router.post("/new", isLoggedIn, createGroup);

export default router;
