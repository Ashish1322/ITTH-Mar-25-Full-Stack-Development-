import jwt from "jsonwebtoken";

function createGroup(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: `Room Created Successfully for user ${req["user"]["user_id"]}`,
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

export { createGroup };
