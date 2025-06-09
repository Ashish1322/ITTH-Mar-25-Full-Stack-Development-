import Group from "../models/group.js";
import Messages from "../models/message.js";
function generateFourDigitRandomNumber() {
  return Math.floor(1000 + Math.random() * 9000);
}

async function createGroup(req, res) {
  try {
    const { name } = req.body;
    const newGroup = await Group.create({
      name: name,
      admin: req["user"]["user_id"],
      shortId: generateFourDigitRandomNumber(),
    });
    return res.status(201).json({ message: "Group Created", group: newGroup });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function deleteGroup(req, res) {
  try {
    const { group_id } = req.params;
    const group = await Group.findById(group_id);
    if (!group) {
      return res.status(400).json({ message: "invalid group id" });
    }
    if (group["admin"] == req["user"]["user_id"]) {
      await Group.findByIdAndDelete(group_id);
      return res.status(200).json({ message: "Group Deleted" });
    }

    return res.status(400).json({ message: "You don't have admin access" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function getAllGroups(req, res) {
  try {
    const current_user_id = req["user"]["user_id"];
    const groups = await Group.find({
      $or: [
        {
          admin: current_user_id,
        },
        {
          "participants.user": current_user_id,
        },
      ],
    }).populate("participants.user", "email name profilePhoto");

    return res.status(200).json({ groups: groups });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function joinGroup(req, res) {
  try {
    const { short_group_id } = req.params;
    // if this group exists
    const group = await Group.findOne({ shortId: parseInt(short_group_id) });
    if (!group) {
      return res.status(400).json({ message: "invalid group id" });
    }
    // if you are already part of the group
    const filteredDocs = group.participants.filter((grp) => {
      if (grp["user"] == req["user"]["user_id"]) {
        return grp;
      }
    });
    if (filteredDocs.length > 0) {
      return res.status(400).json({ message: "You already joined the group" });
    }

    // add the user as participant
    group.participants.push({
      user: req["user"]["user_id"],
    });
    await group.save();
    return res.status(200).json({ message: "Group Joined" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function exitGroup(req, res) {
  try {
    const { group_id } = req.params;
    // if this group exists
    const group = await Group.findById(group_id);
    if (!group) {
      return res.status(400).json({ message: "invalid group id" });
    }
    // Check if user is part of group
    const filteredDocs = group.participants.filter((grp) => {
      if (grp["user"] == req["user"]["user_id"]) {
        return grp;
      }
    });
    if (filteredDocs.length == 0) {
      return res
        .status(400)
        .json({ message: "You are not the part of given group" });
    }

    // remove the user as participant
    const newParticipants = group.participants.filter((grp) => {
      if (grp["user"] != req["user"]["user_id"]) {
        return grp;
      }
    });
    group.participants = newParticipants;
    await group.save();
    return res.status(200).json({ message: "Group Exited" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function storeMessage(content, senderId, groupId) {
  const msg = await Messages.create({
    content: content,
    senderId: senderId,
    groupId: groupId,
  });

  return msg;
}

async function getAllMessages(req, res) {
  try {
    // TODO : Check if current user participant or admin for given group id then only send all the messages
    const { group_id } = req.params;
    console.log("Fetching messages of group", group_id);
    const messages = await Messages.find({ groupId: group_id });

    return res.status(200).json({ messages: messages });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

export {
  createGroup,
  deleteGroup,
  getAllGroups,
  joinGroup,
  exitGroup,
  storeMessage,
  getAllMessages,
};
