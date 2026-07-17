const authModel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = (req, res) => {

    const { email, password } = req.body;

    authModel.findAdminByEmail(email, async (err, admin) => {

        if (err) {
            return res.status(500).json({
                message: "Server Error"
            });
        }

        if (!admin) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            });
        }

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Email or Password"
            });
        }

        const token = jwt.sign(
            {
                admin_id: admin.admin_id,
                email: admin.email
            },
            "studentperformance_secret_key",
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            message: "Login Successful",
            token
        });

    });

};

module.exports = {
    login
};