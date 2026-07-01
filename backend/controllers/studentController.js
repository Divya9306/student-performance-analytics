const studentModel = require("../models/studentModel");

const getStudents = (req, res) => {

    studentModel.getAllStudents((err, students) => {

        if (err) {
            return res.status(500).json({
                message: "Database Error",
                error: err.message
            });
        }

        res.status(200).json(students);

    });

};


const addStudent = (req, res) => {

    const student = req.body;

    studentModel.addStudent(student, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to add student",
                error: err.message
            });
        }

        res.status(201).json({
            message: "Student added successfully",
            studentId: result.insertId
        });

    });

};

const updateStudent = (req, res) => {

    const id = req.params.id;

    const student = req.body;

    studentModel.updateStudent(id, student, (err, result) => {

        if (err) {

            console.log(err);
            return res.status(500).json({
                message: "Failed to update student",
                error: err.message
            });

        }

        res.status(200).json({
            message: "Student updated successfully"
        });

    });

};

const deleteStudent = (req, res) => {

    const id = req.params.id;

    studentModel.deleteStudent(id, (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to delete student",
                error: err.message
            });
        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully"
        });

    });

};

const searchStudents = (req, res) => {

    const name = req.query.name;

    studentModel.searchStudents(name, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Search failed",
                error: err.message
            });
        }

        res.status(200).json(results);

    });

};

const getStudentById = (req, res) => {

    const id = req.params.id;

    studentModel.getStudentById(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch student",
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(results[0]);

    });

};

const getStudentsPaginated = (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const offset = (page - 1) * limit;

    studentModel.getStudentsPaginated(limit, offset, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch students",
                error: err.message
            });
        }

        res.status(200).json({
            page,
            limit,
            totalReturned: results.length,
            data: results
        });

    });

};

const getStudentReport = (req, res) => {

    const id = req.params.id;

    studentModel.getStudentReport(id, (err, results) => {

        if (err) {
            return res.status(500).json({
                message: "Failed to fetch report",
                error: err.message
            });
        }

        if (results.length === 0) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        const average =
            results.reduce((sum, row) => sum + row.marks, 0) / results.length;

        const attendance =
            (results[0].present_days / results[0].total_days) * 100;

        const report = {
            student_id: results[0].student_id,
            name: results[0].name,
            department: results[0].department,
            averageMarks: Number(average.toFixed(2)),
            attendancePercentage: Number(attendance.toFixed(2)),
            status: average >= 40 ? "Pass" : "Fail",
            subjects: results.map(row => ({
                subject: row.subject_name,
                marks: row.marks
            }))
        };

        res.status(200).json(report);

    });

};
module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent,
    searchStudents,
    getStudentsPaginated,
    getStudentReport
};