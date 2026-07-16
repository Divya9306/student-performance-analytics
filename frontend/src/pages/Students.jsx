import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

import StudentTable from "../components/StudentTable";
import AddStudent from "../components/AddStudent";
import SearchBar from "../components/SearchBar";
import DashboardCards from "../components/DashboardCards";
import DeleteModal from "../components/DeleteModal";
import Pagination from "../components/Pagination";
import DepartmentPieChart from "../components/DepartmentPieChart";
import DepartmentBarChart from "../components/DepartmentBarChart";
import { exportStudentsToExcel } from "../utils/exportExcel";
import { exportStudentsToPDF } from "../utils/exportPDF";

function Students() {
    const [students, setStudents] = useState([]);
    const [editingStudent, setEditingStudent] = useState(null);
    const [search, setSearch] = useState("");

    const [departmentStats, setDepartmentStats] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [stats, setStats] = useState({
        totalStudents: 0,
        totalSubjects: 0,
        totalMarksRecords: 0,
        averageMarks: 0
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
        fetchDashboardStats();
        fetchDepartmentStats();
    }, [currentPage, search]);

    const fetchStudents = async () => {
        try {

            if (search.trim() !== "") {

                const response = await api.get(
                    `/students/search?name=${search}`
                );

                setStudents(response.data);
                setTotalPages(1);

                return;
            }

            const response = await api.get(
                `/students/page/list?page=${currentPage}&limit=5`
            );

            setStudents(response.data.data);
            setTotalPages(response.data.totalPages);

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

    const fetchDepartmentStats = async () => {
        try {
            const response = await api.get("/dashboard/department-stats");
            setDepartmentStats(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const openDeleteModal = (student) => {
        setSelectedStudent(student);
        setIsModalOpen(true);
    };

    const closeDeleteModal = () => {
        setSelectedStudent(null);
        setIsModalOpen(false);
    };

    const confirmDelete = async () => {
        try {

            await api.delete(`/students/${selectedStudent.student_id}`);

            toast.success("Student deleted successfully!");

            fetchStudents();
            fetchDashboardStats();
            fetchDepartmentStats();

            closeDeleteModal();

        } catch (error) {

            console.error(error);

            toast.error("Failed to delete student");

        }
    };

    return (
        <div className="space-y-8">

            <DashboardCards stats={stats} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <DepartmentPieChart data={departmentStats} />

    <DepartmentBarChart data={departmentStats} />

</div>

            <div className="bg-white rounded-xl shadow-lg p-8">

               <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

    <h1 className="text-3xl font-bold text-gray-800">
        Student Management
    </h1>

    <div className="flex gap-3">

        <button
            onClick={() => exportStudentsToExcel(students)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
            📥 Export Excel
        </button>

        <button
            onClick={() => exportStudentsToPDF(students)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow transition"
        >
            📄 Export PDF
        </button>

    </div>

</div>

                <AddStudent
                    onStudentAdded={() => {
                        fetchStudents();
                        fetchDashboardStats();
                        fetchDepartmentStats();
                    }}
                    editingStudent={editingStudent}
                    setEditingStudent={setEditingStudent}
                />

                <SearchBar
                    search={search}
                    setSearch={(value) => {
                        setSearch(value);
                        setCurrentPage(1);
                    }}
                />

                <StudentTable
                    students={students}
                    onEdit={setEditingStudent}
                    onDelete={openDeleteModal}
                />

                {search.trim() === "" && (
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}

            </div>

            <DeleteModal
                isOpen={isModalOpen}
                studentName={selectedStudent?.name}
                onClose={closeDeleteModal}
                onConfirm={confirmDelete}
            />

        </div>
    );
}

export default Students;