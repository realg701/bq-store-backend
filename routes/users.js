import express from "express";
import { User } from "../models/user.js";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
const saltRounds = 10;

export const userRouter = express.Router();

// Register API
userRouter.post("/register", async (req, res) => {
  const { userName, passWord } = req.body;

  const userExist = await User.findOne({ userName });
  if (userExist) {
    res.send({ message: "User already exist" });
    return;
  }
  const hashedPassWord = await bcrypt.hash(passWord, saltRounds);
  const userData = { userName, passWord: hashedPassWord };
  console.log(userData);
  const userInstance = new User(userData);
  const savedUser = await userInstance.save();
  res.send({ user: savedUser, message: "Registered sucessfully" });
});

// Login API
userRouter.post("/login", async (req, res) => {
  const { userName, passWord } = req.body;

  const isUser = await User.findOne({ userName });
  if (isUser) {
    const matchPassWord = await bcrypt.compare(passWord, isUser.passWord);
    if (matchPassWord) {
      const token = jwt.sign({ _id: isUser._id }, process.env.jwt_secret, {
        expiresIn: "30d",
      });
      res.send({
        matchPassWord,
        message: "Login Successfully",
        user: isUser,
        token,
      });
    } else {
      res.send({ matchPassWord, message: "Incorrect Password" });
    }
  } else {
    res.send({ message: "Incorrect Username" });
  }
});
