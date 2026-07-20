import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");

        toast.success("Logged out successfully!");

        navigate("/login");

    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                <div>

                    <h1 className="text-2xl font-bold text-white">
                        🎓 Student Performance System
                    </h1>

                    <p className="text-blue-100 text-sm">
                        Manage Students Efficiently
                    </p>

                </div>

                <div className="hidden md:flex gap-6 items-center text-white font-medium">

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-bold"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Dashboard
                    </NavLink>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-bold"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Students
                    </NavLink>

                    <NavLink
                        to="/leaderboard"
                        className={({ isActive }) =>
                            isActive
                                ? "text-yellow-300 font-bold"
                                : "hover:text-yellow-300 transition"
                        }
                    >
                        Leaderboard
                    </NavLink>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;