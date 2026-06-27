const express = require("express");
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});