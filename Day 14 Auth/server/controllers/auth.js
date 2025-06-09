import User from "../models/user.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

async function login(req, res) {
  try {
    const { email, password } = req.body;
    // 1. Check if account already exist
    const account = await User.findOne({ email: email });
    if (!account) {
      return res.status(400).json({ message: "Invalid Email" });
    }
    if (!account.verified) {
      return res.status(400).json({
        message: "Please activate your account via link send on your eamil",
      });
    }
    // 2. Verify the password
    bcrypt.compare(password, account.password, function (err, result) {
      if (!result) {
        return res.status(400).json({ message: "Invalid Password" });
      }

      // 3. Sign a access token
      const token = jwt.sign(
        {
          user_id: account._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 }
      );
      return res.status(200).json({
        message: "login success",
        accessToken: token,
        user_id: account._id,
        name: account.name,
        profilePhoto: account.profilePhoto,
      });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function register(req, res) {
  try {
    const { email, password, name, gender } = req.body;

    // 1. Check if account already exist
    const oldAccount = await User.findOne({ email: email });
    if (oldAccount) {
      return res
        .status(400)
        .json({ message: "Account already exist with provided email" });
    }

    // 2. Hash the password
    bcrypt.hash(password, 5, async (err, has) => {
      if (err) {
        return res.status(500).json({
          message:
            "Somethign went wrong please try again with different password",
        });
      }
      // 3. We can create an account
      const newUser = await User.create({
        email: email,
        password: has,
        gender: gender,
        name: name,
      });

      // 4. Send the Activation Email
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASS,
        },
      });
      let token = jwt.sign(
        {
          user_id: newUser._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 }
      );

      let url = `${process.env.BACKEND_URL}/api/v1/auth/verify/${token}`;
      let mailDetails = {
        from: process.env.EMAIL,
        to: email,
        subject: "Active your Account",
        text: `Click on the link to activate your account. Link :${url}`,
      };

      transporter.sendMail(mailDetails, function (err, data) {
        if (err) {
          console.log("Error Occurs while sending email", err);
        } else {
          console.log("Email sent successfully");
          // 5. Return the 200 response
          return res.status(201).json({
            message: "Account activation link has been sent on the given email",
            user: newUser,
          });
        }
      });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

async function verifyUser(req, res) {
  try {
    const { token } = req.params;
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(400)
        .json({ message: "invalid request please try again" });
    }
    let user_id = decoded.user_id;
    await User.findByIdAndUpdate(user_id, { verified: true });
    return res.status(200).json({ message: "Account Activated you can login" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
}

function forgetPassword(req, res) {}

function changePassword(req, res) {}

async function saveProfilePhotoUrl(req, res) {
  await User.findByIdAndUpdate(req.user["user_id"], {
    profilePhoto: `${process.env.BACKEND_URL}/public/${req.user["user_id"]}.png`,
  });
  console.log("SAved in db");
  return res.status(200).json({ message: "profile photo uploaded" });
}
export {
  login,
  register,
  verifyUser,
  forgetPassword,
  changePassword,
  saveProfilePhotoUrl,
};
