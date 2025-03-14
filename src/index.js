import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import { connectDB } from './lib/db.js';

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5001; // Default to 5001 if undefined

// Connect to MongoDB before starting the server
connectDB().then(() => {
  app.use("/api/auth", authRoutes);

  app.listen(PORT, () => {
    console.log(`✅ Server is running on PORT: ${PORT}`);
  });
}).catch((err) => {
  console.error("❌ Failed to connect to MongoDB:", err);
});
