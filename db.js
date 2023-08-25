import mongoose from "mongoose";

export const connectDb = mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected!"));
