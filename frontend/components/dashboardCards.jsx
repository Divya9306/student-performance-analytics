function DashboardCards({ stats }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-blue-600 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold">👨‍🎓 Total Students</h3>
                <p className="text-3xl font-bold mt-3">
                    {stats.totalStudents}
                </p>
            </div>

            <div className="bg-green-600 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold">📚 Total Subjects</h3>
                <p className="text-3xl font-bold mt-3">
                    {stats.totalSubjects}
                </p>
            </div>

            <div className="bg-yellow-500 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold">📝 Marks Records</h3>
                <p className="text-3xl font-bold mt-3">
                    {stats.totalMarksRecords}
                </p>
            </div>

            <div className="bg-purple-600 text-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold">📈 Average Marks</h3>
                <p className="text-3xl font-bold mt-3">
                    {stats.averageMarks}
                </p>
            </div>

        </div>
    );
}

export default DashboardCards;