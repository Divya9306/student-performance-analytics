function StudentTable({ students }) {

    return (

        <table border="1" cellPadding="10">

            <thead>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Admission Date</th>
                    <th>Actions</th>
                </tr>

            </thead>

            <tbody>

                {students.map((student) => (

                    <tr key={student.student_id}>

                        <td>{student.student_id}</td>

                        <td>{student.name}</td>

                        <td>{student.email_ID}</td>

                        <td>{student.department}</td>

                        <td>{student.admission_date}</td>

                        <td>
                            <button>Edit</button>
                            {" "}
                            <button>Delete</button>
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    );

}

export default StudentTable;