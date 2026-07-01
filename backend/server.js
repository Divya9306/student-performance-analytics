const express = require("express");
const dashboardRoutes = require("./routes/dashboardRoute");
const leaderboardRoutes = require("./routes/leaderboardRoute");
require("dotenv").config();

const db = require("./config/db");
const studentRoutes = require("./routes/studentRoute");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Student Performance Analytics Backend Running");
});

// Student Routes
app.use("/students", studentRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/leaderboard", leaderboardRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});