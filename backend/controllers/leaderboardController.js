const leaderboardModel = require("../models/leaderboardModel");

const getLeaderboard = (req, res) => {

    leaderboardModel.getLeaderboard((err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch leaderboard",
                error: err.message
            });
        }

        const leaderboard = results.map((student, index) => ({
            rank: index + 1,
            ...student
        }));

        res.status(200).json(leaderboard);

    });

};

module.exports = {
    getLeaderboard
};