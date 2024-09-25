import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    products: { type: Array, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    address: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
