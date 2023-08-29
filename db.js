import mongoose from "mongoose";

export default function connectDb (){ mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("Connected!"));}
