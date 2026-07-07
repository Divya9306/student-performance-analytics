function StudentTable({ students, onEdit, onDelete }) {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">

                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-4 py-3 text-left">ID</th>
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Email</th>
                        <th className="px-4 py-3 text-left">Department</th>
                        <th className="px-4 py-3 text-left">Admission Date</th>
                        <th className="px-4 py-3 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((student) => (
                        <tr
                            key={student.student_id}
                            className="border-b hover:bg-gray-100 transition"
                        >
                            <td className="px-4 py-3">{student.student_id}</td>
                            <td className="px-4 py-3">{student.name}</td>
                            <td className="px-4 py-3">{student.email_ID}</td>
                            <td className="px-4 py-3">{student.department}</td>
                            <td className="px-4 py-3">
                                {student.admission_date?.split("T")[0]}
                            </td>

                            <td className="px-4 py-3 text-center space-x-2">

                                <button
                                    onClick={() => onEdit(student)}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => onDelete(student.student_id)}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                                >
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );

}

export default StudentTable;    