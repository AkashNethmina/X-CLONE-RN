import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(ENV.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connecting to MONGODB");
        process.exit(1);
    }
}