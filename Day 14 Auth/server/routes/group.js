import express from "express";
import {
  createGroup,
  deleteGroup,
  getAllGroups,
  joinGroup,
  exitGroup,
  getAllMessages,
} from "../controllers/group.js";
import { isLoggedIn } from "../middlewares/auth.js";
const router = express.Router();

router.post("/", isLoggedIn, createGroup);
router.get("/", isLoggedIn, getAllGroups);
router.put("/join/:group_id", isLoggedIn, joinGroup);
router.delete("/:group_id", isLoggedIn, deleteGroup);
router.put("/exit/:group_id", isLoggedIn, exitGroup);
router.get("/messages/:group_id", isLoggedIn, getAllMessages);

export default router;
