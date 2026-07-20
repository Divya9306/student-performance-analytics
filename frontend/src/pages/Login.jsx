import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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

            const response = await api.post("/auth/login", formData);

            localStorage.setItem("token", response.data.token);

            toast.success("Login Successful!");

            navigate("/");

        } catch (error) {

            toast.error("Invalid Email or Password");

        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Admin Login
                </h1>

                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                        required
                    />

                    <button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>

    );

}

export default Login;