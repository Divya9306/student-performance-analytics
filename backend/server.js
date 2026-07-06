const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./config/db");

const studentRoutes = require("./routes/studentRoute");
const dashboardRoutes = require("./routes/dashboardRoute");
const leaderboardRoutes = require("./routes/leaderboardRoute");

const app = express();

// ---------- Middleware ----------
app.use(cors());
app.use(express.json());

// ---------- Port ----------
const PORT = process.env.PORT || 5000;

// ---------- Home Route ----------
app.get("/", (req, res) => {
    res.send("Student Performance Analytics Backend Running");
});

// ---------- Routes ----------
app.use("/students", studentRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/leaderboard", leaderboardRoutes);

// ---------- Start Server ----------
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});