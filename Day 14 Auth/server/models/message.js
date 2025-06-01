import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  senderId: {
    type: mongoose.Types.ObjectId,
    ref: "testusers",
    required: true,
  },
  groupId: {
    type: String,
    required: true,
  },
});

const Messages = mongoose.model("testmessages", MessageSchema);
export default Messages;
