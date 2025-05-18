import express from "express";
import mongoose from "mongoose";
import todosRouter from "./routes/todos.js";
import cors from "cors";

const app = express();

// apply middlewer
app.use(express.json());
// Add cors policy
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Register the router
app.use("/api/v1/todos", todosRouter);

// connect to db
mongoose
  .connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12"
  )
  .then(() => {
    console.log("Db Connected Starting Server");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((err) => {
    console.log("error while connecting to db ", err);
  });
