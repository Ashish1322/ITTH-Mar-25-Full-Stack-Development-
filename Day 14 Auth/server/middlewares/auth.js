import jwt from "jsonwebtoken";

function isLoggedIn(req, res, next) {
  try {
    const accessToken = req.headers["authorization"];
    let result = jwt.verify(accessToken, process.env.JWT_SECRET);

    if (!result) {
      return res
        .status(401)
        .json({ message: "Access Token invalid please login again" });
    }
    req["user"] = result;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ message: "Access Token invalid please login again" });
  }
}

export { isLoggedIn };
