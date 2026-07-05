import { useState } from "react";
import api from "../services/api";

function AddStudent({ onStudentAdded }) {
    const [formData, setFormData] = useState({
        name: "",
        email_ID: "",
        department: "",
        admission_date: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/students", formData);

            alert("Student added successfully!");

            setFormData({
                name: "",
                email_ID: "",
                department: "",
                admission_date: ""
            });

            onStudentAdded();

        } catch (error) {
            console.error(error);
            alert("Failed to add student");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Student</h2>

            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <br /><br />

            <input
                type="email"
                name="email_ID"
                placeholder="Email"
                value={formData.email_id}
                onChange={handleChange}
                required
            />

            <br /><br />

            <input
                type="text"
                name="department"
                placeholder="Department"
                value={formData.department}
                onChange={handleChange}
                required
            />

            <br /><br />

            <input
                type="date"
                name="admission_date"
                value={formData.admission_date}
                onChange={handleChange}
                required
            />

            <br /><br />

            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudent;