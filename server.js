// server.js — CommonJS version for Render

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load .env
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Simple route to confirm server is running
app.get("/", (req, res) => {
  res.send("🚀 Markly backend is running");
});

// Auth routes
app.use("/api/auth", require("./routes/auth"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
