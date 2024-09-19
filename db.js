import mongoose from "mongoose";

const connectToDB = async () => {
  let isConnected = false; // variable to check the connection status
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) console.log("MONGODB_URL not found");
  if (isConnected) console.log("Already connected to MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error: ", error);
  }
};

export default connectToDB;
