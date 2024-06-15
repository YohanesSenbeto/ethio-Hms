const express = require("express");
const bcrypt = require("bcryptjs"); // Updated import statement to use bcryptjs
const jwt = require("jsonwebtoken");
const employee = express.Router();

const db = require("../../../utils/db");

const SECRET_KEY = "Arijit";

employee.post("/register", (req, res) => {
    console.log(req.body)
  const employeeData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role, // Assuming role is also part of employee data
  };

  let find = `SELECT * FROM employees WHERE email = "${employeeData.email}"`;

  db.query(find, (err1, result1) => {
    if (err1) console.log(err1);

    if (result1[0] === undefined) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        employeeData.password = hash;

        let create = `INSERT INTO employees (first_name, last_name, email, password, role)
                              VALUES ("${employeeData.first_name}", 
                                      "${employeeData.last_name}", 
                                      "${employeeData.email}",
                                      "${employeeData.password}",
                                      "${employeeData.role}")`;

        db.query(create, (err2, result2) => {
          if (err2) console.log(err2);
          res.send("Employee registered successfully");
        });
      });
    } else {
      res.send("Employee already exists");
    }
  });
});

employee.post("/login", (req, res) => {
  let find = `SELECT password, employee_id FROM employees WHERE email = "${req.body.email}"`;

  db.query(find, (err, result) => {
    if (err) console.log(err);

    if (result[0] !== undefined) {
      if (bcrypt.compareSync(req.body.password, result[0].password)) {
        let token = jwt.sign(
          { employee_id: result[0].employee_id },
          SECRET_KEY
        );
        res.send(token);
      } else {
        res.send("Password incorrect");
      }
    } else {
      res.send("Email not found");
    }
  });
});

employee.get("/profile", (req, res) => {
  let employee_id = jwt.verify(req.headers["authorization"], SECRET_KEY);

  let employee = `SELECT * FROM employees WHERE employee_id = ${employee_id}`;
  db.query(employee, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

module.exports = employee;
