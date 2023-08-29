import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDb from "./db.js";
import { userRouter } from "./routes/users.js";
import { productRouter } from "./routes/products.js";
import { orderRouter } from "./routes/orders.js";
import { uploadRouter } from "./routes/upload.js";
import "dotenv/config";

// APIs
const app = express();
connectDb();

// Middlewares
app.use(cors());
app.use(express.json());

// API Variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 9999;

// Routes
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/upload", uploadRouter);

// Server
app.listen(PORT, () => console.log("Server is Running " + PORT));
