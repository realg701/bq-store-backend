import express from "express";
import { Product } from "../models/product.js";
import { protect } from "../middlewares/auth.js";
import _ from "lodash";

export const productRouter = express.Router();

//  API
productRouter.get("/all", async (req, res) => {
  const allProducts = await Product.find({});
  if (allProducts.length) {
    res.send({ products: allProducts });
  } else {
    res.send({ message: "No Products Availabe" });
  }
});

productRouter.get("/all/categories/:category", async (req, res) => {
  const category = req.params.category;
  try {
    const allProducts = await Product.find({});
    if (allProducts.length) {
      const filteredProducts = _.filter(
        allProducts,
        (item) => item.category.toLowerCase() === category
      );
      res.send({ products: filteredProducts });
    } else {
      res.send({ message: "No Products Availabe", status: "not_found" });
    }
  } catch (error) {
    res.send({ message: error.message, status: "error" });
  }
});

productRouter.post("/add", protect, async (req, res) => {
  const { title, category, seller, image, description, price } = req.body;
  const productData = { title, category, seller, image, description, price };
  const productInstance = new Product(productData);
  const savedProduct = await productInstance.save();
  res.send({ product: savedProduct, message: "Product Added" });
});

productRouter.put("/edit/:id", protect, async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findOne({ _id: productID });
    if (product) {
      product.title = req.body.title;
      product.category = req.body.category;
      product.seller = req.body.seller;
      product.image = req.body.image;
      product.description = req.body.description;
      product.price = req.body.price;
      const savedProduct = await product.save();
      res.send({
        product: savedProduct,
        message: "Product Edited",
        status: "success",
      });
    } else {
      res.send({ message: "Product Not Found", status: "not-found" });
    }
  } catch (error) {
    res.send({ message: error.message, status: "error" });
  }
});

productRouter.delete("/:id", protect, async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.deleteOne({ _id: productID });
    res.send({ message: "Product Deleted", product: product });
  } catch (error) {
    res.send({ message: error });
  }
});

productRouter.get("/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findOne({ _id: productID });
    res.send({ product: product, message: "Product Found", status: "success" });
  } catch (error) {
    res.send({ message: error.message, status: "error" });
  }
});
