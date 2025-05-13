import express from "express";

const app = express();
var todos = [];

app.get("/api/v1/todos", (req, res) => {
  return res.status(200).json({ todos: todos });
});

app.post("/api/v1/todos", (req, res) => {
  return res.status(200).json({ success: true, message: "Todo Created" });
});

app.listen(8001, () => {
  console.log("Server Started Successfully on port 8001");
});
