import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Students from "./pages/Students";
import Leaderboard from "./pages/Leaderboard";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">

                <Routes>

                    <Route
                        path="/"
                        element={<Students />}
                    />

                    <Route
                        path="/leaderboard"
                        element={<Leaderboard />}
                    />

                </Routes>

            </main>

        </div>
    );
}

export default App;