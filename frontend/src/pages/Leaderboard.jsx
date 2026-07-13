import { useEffect, useState } from "react";
import api from "../services/api";

function Leaderboard() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    const fetchLeaderboard = async () => {

        try {

            const response = await api.get("/leaderboard");

            setStudents(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    const getRankStyle = (rank) => {

        if (rank === 1)
            return "bg-yellow-100 text-yellow-700 font-bold";

        if (rank === 2)
            return "bg-gray-200 text-gray-700 font-bold";

        if (rank === 3)
            return "bg-orange-100 text-orange-700 font-bold";

        return "";

    };

    return (

        <div className="bg-white rounded-xl shadow-lg p-8">

            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                🏆 Student Leaderboard
            </h1>

            <table className="w-full border-collapse">

                <thead>

                    <tr className="bg-blue-600 text-white">

                        <th className="p-3">Rank</th>
                        <th className="p-3">Student ID</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Average Marks</th>

                    </tr>

                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr
                            key={student.student_id}
                            className={`border-b hover:bg-gray-50 ${getRankStyle(student.rank)}`}
                        >

                            <td className="p-3 text-center">

                                {student.rank === 1 && "🥇"}

                                {student.rank === 2 && "🥈"}

                                {student.rank === 3 && "🥉"}

                                {student.rank > 3 && student.rank}

                            </td>

                            <td className="p-3 text-center">
                                {student.student_id}
                            </td>

                            <td className="p-3">
                                {student.name}
                            </td>

                            <td className="p-3 text-center">
                                {student.averageMarks}
                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default Leaderboard;