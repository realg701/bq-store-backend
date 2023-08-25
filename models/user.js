import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: String,
    passWord: String,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
