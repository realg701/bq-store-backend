import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { userRouter } from "./routes/users.js";
import { productRouter } from "./routes/products.js";
import { orderRouter } from "./routes/orders.js";
import { uploadRouter } from "./routes/upload.js";
import "dotenv/config";

// APIs
const app = express();
mongoose.connect(process.env.mongoURI).then(() => console.log("Connected!"));
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(__dirname + "/uploads"));
// Routes
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/upload", uploadRouter);
const PORT = 9999;
// Server
app.listen(PORT, () => console.log("Server is Running " + PORT));
