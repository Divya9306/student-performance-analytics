const db = require("../config/db");

const findAdminByEmail = (email, callback) => {

    const sql = `
        SELECT *
        FROM Admins
        WHERE email = ?
    `;

    db.query(sql, [email], (err, results) => {

        if (err) {
            return callback(err, null);
        }

        callback(null, results[0]);

    });

};

module.exports = {
    findAdminByEmail
};