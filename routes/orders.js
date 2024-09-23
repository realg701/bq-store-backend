import express from "express";
import { Order } from "../models/order.js";

export const orderRouter = express.Router();

// // Order API
// userRouter.post("/order", async (req, res) => {
//   const { products, name, phoneNumber, address, email } = req.body;

//   const productsExist = await Order.findOne({ email });
//   if (products == productsExist.products) {
//     res.send({ message: "product already exist" });
//     return;
//   }
//   const orderData = { products, name, phoneNumber, address, email };
//   console.log(orderData);
//   const orderInstance = new Order(orderData);
//   const savedOrder = await orderInstance.save();
//   res.send({ order: savedOrder, message: "Ordered sucessfully" });
// });

// // Login API
// userRouter.post("/login", async (req, res) => {
//   const { userName, passWord } = req.body;

//   const isUser = await User.findOne({ userName });
//   if (isUser) {
//     const matchPassWord = await bcrypt.compare(passWord, isUser.passWord);
//     if (matchPassWord) {
//       const token = jwt.sign({ _id: isUser._id }, process.env.jwt_secret, {
//         expiresIn: "30d",
//       });
//       res.send({
//         matchPassWord,
//         message: "Login Successfully",
//         user: isUser,
//         token,
//       });
//     } else {
//       res.send({ matchPassWord, message: "Incorrect Password" });
//     }
//   } else {
//     res.send({ message: "Incorrect Username" });
//   }
// });
