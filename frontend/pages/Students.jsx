import { useEffect, useState } from "react";
import api from "../services/api";
import StudentTable from "../components/StudentTable";
import AddStudent from "../components/AddStudent";

function Students() {
    const [students, setStudents] = useState([]);

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

    return (
        <div>
            <AddStudent onStudentAdded={fetchStudents} />

            <br />

            <h1>Students</h1>

            <StudentTable students={students} />
        </div>
    );
}

export default Students;