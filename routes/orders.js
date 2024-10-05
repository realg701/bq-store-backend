import express from "express";
import { Order } from "../models/order.js";

export const orderRouter = express.Router();

// Order Post API
orderRouter.post("/order", async (req, res) => {
  const { name, phoneNumber, address, email, total, products } = req.body;
  console.log("Body:", req.body);
  try {
    if (products.length === 0)
      return res.json({
        message: "cart is empty",
        status: "empty",
      });
    console.log("Products:", products);
    const order = await Order.create({
      name: name,
      phoneNumber: phoneNumber,
      address: address,
      email: email,
      total: total,
      products: products,
    });
    console.log("Order:", order);
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
  try {
    const allOrders = await Order.find({});
    if (allOrders.length) {
      res.send({ orders: allOrders });
    } else {
      res.send({ message: "No orders Availabe" });
    }
  } catch (error) {
    console.log("Error:", error);
    return res.json({
      message: error.message,
      status: "error",
    });
  }
});
