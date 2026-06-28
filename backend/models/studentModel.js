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



const addStudent = (student, callback) => {

    const sql = `
        INSERT INTO Students
        (name, email_ID, department, admission_date)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            student.name,
            student.email_ID,
            student.department,
            student.admission_date
        ],
        (err, result) => {

            if (err) {
                return callback(err, null);
            }

            callback(null, result);

        }
    );

};



const updateStudent = (id, student, callback) => {

    const sql = `
        UPDATE Students
        SET
            name = ?,
            email_ID = ?,
            department = ?,
            admission_date = ?
        WHERE student_id = ?
    `;

    db.query(
        sql,
        [
            student.name,
            student.email_ID,
            student.department,
            student.admission_date,
            id
        ],
        (err, result) => {

            if (err) {
                return callback(err, null);
            }

            callback(null, result);

        }
    );

};
module.exports = {
    getAllStudents,
    addStudent,
    updateStudent
};