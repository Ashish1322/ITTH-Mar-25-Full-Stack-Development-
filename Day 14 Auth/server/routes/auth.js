import express from "express";
import {
  login,
  register,
  verifyUser,
  saveProfilePhotoUrl,
} from "../controllers/auth.js";
import { isLoggedIn } from "../middlewares/auth.js";
import upload from "../middlewares/profile-handler.js";
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/verify/:token", verifyUser);
router.post(
  "/profile/upload",
  isLoggedIn,
  upload.single("photo"),
  saveProfilePhotoUrl
);

export default router;
