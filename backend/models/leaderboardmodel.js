const db = require("../config/db");

const getLeaderboard = (callback) => {

    const sql = `
        SELECT
            s.student_id,
            s.name,
            ROUND(AVG(m.marks), 2) AS averageMarks
        FROM Students s
        INNER JOIN Marks m
            ON s.student_id = m.student_id
        GROUP BY s.student_id, s.name
        ORDER BY averageMarks DESC;
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return callback(err, null);
        }

        callback(null, results);

    });

};

module.exports = {
    getLeaderboard
};