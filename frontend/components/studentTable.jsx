function StudentTable({ students, onEdit, onDelete }) {

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <table className="w-full">

                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-4 text-left">ID</th>
                        <th className="px-6 py-4 text-left">Name</th>
                        <th className="px-6 py-4 text-left">Email</th>
                        <th className="px-6 py-4 text-left">Department</th>
                        <th className="px-6 py-4 text-left">Admission Date</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {students.length > 0 ? (
                        students.map((student) => (
                            <tr
                                key={student.student_id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4">{student.student_id}</td>

                                <td className="px-6 py-4 font-medium">
                                    {student.name}
                                </td>

                                <td className="px-6 py-4">
                                    {student.email_ID}
                                </td>

                                <td className="px-6 py-4">
                                    {student.department}
                                </td>

                                <td className="px-6 py-4">
                                    {student.admission_date?.split("T")[0]}
                                </td>

                                <td className="px-6 py-4 flex justify-center gap-2">

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
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                className="text-center py-8 text-gray-500"
                            >
                                No students found.
                            </td>
                        </tr>
                    )}

                </tbody>

            </table>
        </div>
    );

}

export default StudentTable;