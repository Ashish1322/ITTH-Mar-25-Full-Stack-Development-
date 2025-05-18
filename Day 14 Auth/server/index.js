import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import groupRoutes from "./routes/group.js";
import cors from "cors";

// load the env to the process once it's running
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// add routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/group", groupRoutes);

// db connection
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(process.env.PORT, () => {
      console.log("Server Started on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error While Connecting to DB", err);
  });
