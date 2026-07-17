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

const getDepartmentStats = (callback) => {

    const sql = `
        SELECT
            department,
            COUNT(*) AS students
        FROM Students
        GROUP BY department
        ORDER BY students DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return callback(err, null);
        }

        callback(null, results);

    });

};

module.exports = {
    getDashboardStats,
    getDepartmentStats
};