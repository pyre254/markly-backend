import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Simple route
app.get("/", (req, res) => res.send("🚀 Markly backend running"));

// Register route
app.post("/api/auth/register", async (req, res) => {
  res.json({ message: "Register route working" });
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
