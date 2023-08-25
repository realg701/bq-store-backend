import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    image: String,
    title: String,
    category: String,
    seller: String,
    price: Number,
    description: String,
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
