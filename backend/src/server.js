// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db"); // path you created earlier
const eventRoutes = require("./src/routes/event.route");

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173", // adjust if needed
}));
app.use(express.json());

// Connect to DB
connectDB();

// Routes
app.get("/", (req, res) => res.json({ ok: true, msg: "Calendar API running" }));
app.use("/api/events", eventRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Not found" });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

// Start
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
