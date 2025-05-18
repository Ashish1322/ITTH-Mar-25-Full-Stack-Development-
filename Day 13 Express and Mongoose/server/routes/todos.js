import express from "express";
import {
  getAllTodos,
  createTodo,
  markTodoAsCompleted,
  removeTodo,
} from "../controllers/todo.js";
const router = express.Router();

// Read
router.get("/", getAllTodos);

// Create
router.post("/", createTodo);

// Delete
router.delete("/:id/remove", removeTodo);

// Update
router.put("/:id/complete", markTodoAsCompleted);

export default router;
