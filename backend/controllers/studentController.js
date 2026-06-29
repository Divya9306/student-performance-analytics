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

module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};