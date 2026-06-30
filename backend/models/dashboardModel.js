const db = require("../config/db");

const getDashboardStats = (callback) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM Students) AS totalStudents,
            (SELECT COUNT(*) FROM Subjects) AS totalSubjects,
            (SELECT COUNT(*) FROM Marks) AS totalMarksRecords,
            (SELECT ROUND(AVG(marks),2) FROM Marks) AS averageMarks
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return callback(err, null);
        }

        callback(null, results[0]);

    });

};

module.exports = {
    getDashboardStats
};