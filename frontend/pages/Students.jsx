import { useEffect, useState } from "react";
import api from "../services/api";
import StudentTable from "../components/StudentTable";
import AddStudent from "../components/AddStudent";
import SearchBar from "../components/SearchBar";
import DashboardCards from "../components/DashboardCards";
import toast from "react-hot-toast";

function Students() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [search, setSearch] = useState("");

    const [stats, setStats] = useState({
        totalStudents: 0,
        totalSubjects: 0,
        totalMarksRecords: 0,
        averageMarks: 0
    });

    useEffect(() => {
        fetchStudents();
        fetchDashboardStats();
    }, [search]);

    const fetchStudents = async () => {
        try {
            let response;

            if (search.trim() === "") {
                response = await api.get("/students");
            } else {
                response = await api.get(`/students/search?name=${search}`);
            }

            setStudents(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    const fetchDashboardStats = async () => {
        try {
            const response = await api.get("/dashboard");
            setStats(response.data);
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

            toast.success("Student deleted successfully!");

            fetchStudents();
            fetchDashboardStats();

        } catch (error) {

            console.error(error);

            toast.error("Failed to delete student");

        }

    };

    return (
        <div className="space-y-8">

            <DashboardCards stats={stats} />

            <div className="bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold mb-6 text-gray-800">
                    Student Management
                </h1>

                <AddStudent
                    onStudentAdded={() => {
                        fetchStudents();
                        fetchDashboardStats();
                    }}
                    editingStudent={editingStudent}
                    setEditingStudent={setEditingStudent}
                />

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

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