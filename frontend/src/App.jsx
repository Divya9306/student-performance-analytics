
import Navbar from "/components/Navbar";
import Students from "/pages/Students";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <Students />
      </div>
    </div>
  );
}

export default App;

