import express from "express";
import { Order } from "../models/order.js";

export const orderRouter = express.Router();

// Order Post API
orderRouter.post("/order", async (req, res) => {
  const { products, name, phoneNumber, address, email } = req.body;
  console.log("Body:", req.body);
  try {
    const order = await Order.create({
      products: products,
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
    });
    console.log("order", order);
    return res.json({
      message: "order created",
      status: "success",
    });
  } catch (error) {
    return res.json({
      message: error.message,
      status: "error",
    });
  }
});

// Orders Get API
orderRouter.get("/", async (req, res) => {
  const allOrders = await Order.find({});
  if (allOrders.length) {
    res.send({ orders: allOrders });
  } else {
    res.send({ message: "No orders Availabe" });
  }
});
