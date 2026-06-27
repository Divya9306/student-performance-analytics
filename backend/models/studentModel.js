const db = require("../config/db");

const getAllStudents = (callback) => {
    const sql = "SELECT * FROM Students";

    db.query(sql, (err, results) => {
        if (err) {
            return callback(err, null);
        }

        callback(null, results);
    });
};

module.exports = {
    getAllStudents
};
