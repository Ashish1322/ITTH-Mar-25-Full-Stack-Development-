import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import groupRoutes from "./routes/group.js";
import cors from "cors";
import { storeMessage } from "./controllers/group.js";
import { Server } from "socket.io";
import logger from "./logging/logger.js";

// load the env to the process once it's running
dotenv.config();
const app = express();

// middlewares
app.use(express.json());
app.use(
  cors({
    origin: [process.env.FRONTED_URL],
  })
);
app.use("/public", express.static("uploads"));

// add routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/group", groupRoutes);

// db connection
// mongoose
//   .connect(process.env.DB_URL)
//   .then(() => {
//     logger.info("DB connected and app is started");
//     console.log("DB Connected Successfully");
//     const serverInstance = app.listen(process.env.PORT, () => {
//       console.log("Server Started on port", process.env.PORT);
//     });

//     const io = new Server(serverInstance, {
//       cors: {
//         origin: [process.env.FRONTED_URL],
//       },
//     });
//     io.on("connection", (socket) => {
//       console.log("Client Connected ", socket.id);
//       socket.on("disconnect", () => {
//         console.log("Client Disconnected");
//       });

//       socket.on("message", async (payload) => {
//         console.log("Message Received", payload);
//         await storeMessage(payload.content, payload.senderId, payload.groupId);
//         io.emit(payload.groupId, payload);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log("Error While Connecting to DB", err);
//   });

export default app;
