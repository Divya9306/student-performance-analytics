const express = require("express");

const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/", dashboardController.getDashboardStats);

router.get("/department-stats", dashboardController.getDepartmentStats);

module.exports = router;