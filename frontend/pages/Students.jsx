import { useEffect, useState } from "react";
import api from "../services/api";

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

            <table border="1">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Admission</th>

                    </tr>

                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student.student_id}>

                            <td>{student.student_id}</td>

                            <td>{student.name}</td>

                            <td>{student.email_id}</td>

                            <td>{student.department}</td>

                            <td>{student.admission_date}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Students;