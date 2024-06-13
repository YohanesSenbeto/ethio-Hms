const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "hmspro",
    password: "hms@123",
    database: "hmspro",
});

db.connect((err) => {
    if (err) throw err;
    console.log("MySQL connected");
});

module.exports = db;
