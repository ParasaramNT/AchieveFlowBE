import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
    try {
        const dbUrl = process.env.DB_URL ?? "";
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error connecting to MongoDB:", error.message);
        } else {
            console.error("Unexpected error:", error);
        }
        process.exit(1); // 
    }
};

export default dbConnect;