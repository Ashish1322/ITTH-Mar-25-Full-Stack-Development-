import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const todoCollection = mongoose.model("todos", todoSchema);
export default todoCollection;

// https://mongoosejs.com/docs/queries.html
