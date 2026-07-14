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

    const topThree = students.slice(0, 3);

    return (

        <div className="space-y-8">

            <div className="bg-white rounded-xl shadow-lg p-8">

                <h1 className="text-3xl font-bold text-gray-800 mb-8">
                    🏆 Student Leaderboard
                </h1>

                <div className="grid md:grid-cols-3 gap-6">

                    {topThree.map((student) => (

                        <div
                            key={student.student_id}
                            className={`rounded-xl p-6 text-center shadow-lg transition hover:scale-105
                            ${
                                student.rank === 1
                                    ? "bg-yellow-100"
                                    : student.rank === 2
                                    ? "bg-gray-200"
                                    : "bg-orange-100"
                            }`}
                        >

                            <div className="text-5xl mb-4">

                                {student.rank === 1 && "🥇"}
                                {student.rank === 2 && "🥈"}
                                {student.rank === 3 && "🥉"}

                            </div>

                            <h2 className="text-xl font-bold">
                                {student.name}
                            </h2>

                            <p className="mt-2 text-lg">
                                ⭐ {student.averageMarks}%
                            </p>

                        </div>

                    ))}

                </div>

            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">

                <h2 className="text-2xl font-bold mb-6">
                    Complete Rankings
                </h2>

                <table className="w-full">

                    <thead>

                        <tr className="bg-blue-600 text-white">

                            <th className="p-3">Rank</th>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Average</th>

                        </tr>

                    </thead>

                    <tbody>

                        {students.map((student) => (

                            <tr
                                key={student.student_id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="p-3 text-center">
                                    {student.rank}
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

        </div>

    );

}

export default Leaderboard;