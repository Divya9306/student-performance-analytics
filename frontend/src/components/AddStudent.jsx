import { useState, useEffect } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function AddStudent({ onStudentAdded, editingStudent }) {
    const [formData, setFormData] = useState({
        name: "",
        email_ID: "",
        department: "",
        admission_date: ""
    });

    useEffect(() => {
        if (editingStudent) {
            setFormData({
                name: editingStudent.name,
                email_ID: editingStudent.email_ID || editingStudent.email_ID,
                department: editingStudent.department,
                admission_date: editingStudent.admission_date?.split("T")[0] || editingStudent.admission_date
            });
        } else {
            setFormData({
                name: "",
                email_ID: "",
                department: "",
                admission_date: ""
            });
        }
    }, [editingStudent]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {

        if (editingStudent) {

            await api.put(
                `/students/${editingStudent.student_id}`,
                formData
            );

            toast.success("Student updated successfully!");

            setEditingStudent(null);

        } else {

            await api.post("/students", formData);

            toast.success("Student added successfully!");

        }

        setFormData({
            name: "",
            email_ID: "",
            department: "",
            admission_date: ""
        });

        onStudentAdded();

    } catch (error) {

        console.error(error);

        toast.error("Operation failed!");

    }
};

   return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

        <h2 className="text-2xl font-bold text-gray-800 mb-6">
            {editingStudent ? "Edit Student" : "Add Student"}
        </h2>

        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >

            <input
                type="text"
                name="name"
                placeholder="Student Name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="email"
                name="email_ID"
                placeholder="Email Address"
                value={formData.email_ID}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <input
                type="date"
                name="admission_date"
                value={formData.admission_date}
                onChange={handleChange}
                className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
            />

            <div className="md:col-span-2">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                    {editingStudent ? "Update Student" : "Add Student"}
                </button>
            </div>

        </form>

    </div>
);
}

export default AddStudent;