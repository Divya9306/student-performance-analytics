function Navbar() {
    return (
        <nav className="bg-linear-to-r from-blue-600 to-indigo-700 shadow-lg">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div>
                    <h1 className="text-2xl font-bold text-white">
                        🎓 Student Performance System
                    </h1>

                    <p className="text-blue-100 text-sm">
                        Manage Students Efficiently
                    </p>
                </div>

                <div className="hidden md:flex gap-6 text-white font-medium">
                    <button className="hover:text-yellow-300 transition">
                        Dashboard
                    </button>

                    <button className="hover:text-yellow-300 transition">
                        Students
                    </button>

                    <button className="hover:text-yellow-300 transition">
                        Leaderboard
                    </button>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;