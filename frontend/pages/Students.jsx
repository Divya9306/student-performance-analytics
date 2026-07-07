import { useEffect, useState } from "react";
import api from "../services/api";
import StudentTable from "../components/StudentTable";
import AddStudent from "../components/AddStudent";

function Students() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await api.get("/students");
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteStudent = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/students/${id}`);

            alert("Student deleted successfully!");

            fetchStudents();

        } catch (error) {

            console.error(error);

            alert("Failed to delete student");

        }

    };

    return (
    <div className="bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
            Student Management
        </h1>

        <AddStudent
            onStudentAdded={fetchStudents}
            editingStudent={editingStudent}
            setEditingStudent={setEditingStudent}
        />

        <div className="mt-8">
            <StudentTable
                students={students}
                onEdit={setEditingStudent}
                onDelete={deleteStudent}
            />
        </div>

    </div>
);
}

export default Students;