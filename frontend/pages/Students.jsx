import { useEffect, useState } from "react";
import api from "../services/api";
import StudentTable from "../components/StudentTable";

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

            <h1>Students</h1>

            <StudentTable students={students} />

        </div>

    );

}

export default Students;