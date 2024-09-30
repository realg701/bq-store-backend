import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: String,
    brand: String,
    seller: { type: String, required: true },
    price: Number,
    units: Number,
    quantity: Number,
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
