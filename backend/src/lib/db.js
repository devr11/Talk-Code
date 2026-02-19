import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined in env");
    }

    console.log("Attempting to connect to MongoDB...");
    console.log("Connection string starts with:", ENV.DB_URL.substring(0, 20));

    const conn = await mongoose.connect(ENV.DB_URL, {
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
    });

    console.log("✅ Connected to MongoDB:", conn.connection.host);
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:");
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    console.error("\n🔧 Possible fixes:");
    console.error("1. Check if MongoDB Atlas cluster is running (not paused)");
    console.error("2. Verify Network Access whitelist includes your IP");
    console.error("3. Confirm database credentials are correct");
    console.error("4. Check your internet connection\n");
    process.exit(1);
  }
};
