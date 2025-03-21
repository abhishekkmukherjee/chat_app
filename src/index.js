import express from "express";
import dotenv from "dotenv"; 
import cookieParser from "cookie-parser";   
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";

dotenv.config();

 

const app = express();
const PORT = process.env.PORT || 5000; // Default port if .env is missing
app.use(cookieParser());    
// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);  // Fixed path from "/app/auth" to "/api/auth"

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB(); 
});
