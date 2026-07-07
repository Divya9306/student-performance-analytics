import Navbar from "/components/Navbar";
import Students from "/pages/Students";

function App() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-8">
                <Students />
            </main>

        </div>
    );
}

export default App;