import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Students from "./pages/Students";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Routes>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <>
                                <Navbar />

                                <main className="max-w-7xl mx-auto px-6 py-8">
                                    <Students />
                                </main>
                            </>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/leaderboard"
                    element={
                        <ProtectedRoute>
                            <>
                                <Navbar />

                                <main className="max-w-7xl mx-auto px-6 py-8">
                                    <Leaderboard />
                                </main>
                            </>
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </div>
    );
}

export default App;