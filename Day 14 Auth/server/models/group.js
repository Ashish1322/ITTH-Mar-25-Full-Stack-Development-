import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  participants: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "testusers",
      },
    },
  ],
  admin: {
    type: mongoose.Types.ObjectId,
    ref: "testusers",
    required: true,
  },
  shortId: {
    type: Number,
    required: true,
  },
});

const Group = mongoose.model("testgroups", GroupSchema);
export default Group;
