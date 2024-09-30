import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    seller: { type: String, required: true },
    price: Number,
    description: String,
    quantity: { type: String, default: 1 },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
