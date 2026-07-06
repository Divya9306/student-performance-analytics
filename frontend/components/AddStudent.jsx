import { useState, useEffect } from "react";
import api from "../services/api";

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

                alert("Student updated successfully!");

            } else {

                await api.post("/students", formData);

                alert("Student added successfully!");

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

            alert("Operation failed");

        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <h2>
                {editingStudent ? "Edit Student" : "Add Student"}
            </h2>

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
                value={formData.email_ID}
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

            <button type="submit">
                {editingStudent ? "Update Student" : "Add Student"}
            </button>

        </form>
    );
}

export default AddStudent;