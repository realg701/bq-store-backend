import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  products: [],
  name: String,
  phoneNumber: Number,
  address: String,
  email: String,
});

export const Order = mongoose.model("Order", orderSchema);
