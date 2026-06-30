const dashboardModel = require("../models/dashboardModel");

const getDashboardStats = (req, res) => {

    dashboardModel.getDashboardStats((err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch dashboard",
                error: err.message
            });
        }

        res.status(200).json(result);

    });

};

module.exports = {
    getDashboardStats
};