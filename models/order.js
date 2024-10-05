import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    products: { type: Array, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
