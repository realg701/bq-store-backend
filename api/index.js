import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectToDB from "../db.js";
import { userRouter } from "../routes/users.js";
import { productRouter } from "../routes/products.js";
import { orderRouter } from "../routes/orders.js";
import { uploadRouter } from "../routes/upload.js";
import "dotenv/config";

// APIs
const app = express();
connectToDB();

// Middlewares
app.use(
  cors({
    origin: 'https://bq-store.vercel.app', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
  })
);
app.use(express.json());

// Greeting
app.get("/", (req, res) => {
  res.send("Hello ");
});

// API Variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/upload", uploadRouter);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
