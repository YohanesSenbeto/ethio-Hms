const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const doctor = express.Router();
const db = require("../../../utils/db");
require("dotenv").config(); // Load environment variables from .env file

const SECRET_KEY = process.env.SECRET_KEY || "default_secret"; // Load SECRET_KEY from environment or use a default

// Route to register a new doctor
doctor.post("/register", (req, res) => {
  const {
    first_name,
    last_name,
    address,
    email,
    salary,
    specialisation,
    shift_time,
    password,
  } = req.body;

  // Check if doctor with the same email already exists
  const find = `SELECT * FROM doctors WHERE email = ?`;
  db.query(find, [email], (err1, result1) => {
    if (err1) {
      console.log(err1);
      return res.status(500).send("Internal server error");
    }

    if (result1.length > 0) {
      return res.status(400).send("Doctor already exists");
    }

    // Hash password before storing in database
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error hashing password");
      }

      // Store new doctor in the database
      const create = `INSERT INTO doctors (first_name, last_name, address, email, salary, specialisation, shift_time, password)
                          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
      db.query(
        create,
        [
          first_name,
          last_name,
          address,
          email,
          salary,
          specialisation,
          shift_time,
          hash,
        ],
        (err2, result2) => {
          if (err2) {
            console.log(err2);
            return res.status(500).send("Error registering doctor");
          }
          res.status(201).send("Doctor registered successfully");
        }
      );
    });
  });
});

// Route to authenticate and login a doctor
doctor.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find doctor by email
  const find = `SELECT doctor_id, password FROM doctors WHERE email = ?`;
  db.query(find, [email], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal server error");
    }

    if (result.length === 0) {
      return res.status(404).send("Email not found");
    }

    // Compare hashed password with provided password
    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error comparing passwords");
      }

      if (isMatch) {
        // Create JWT token
        const token = jwt.sign({ doctor_id: result[0].doctor_id }, SECRET_KEY);
        res.status(200).send(token);
      } else {
        res.status(401).send("Password incorrect");
      }
    });
  });
});

// Route to get patients assigned to the doctor
doctor.get("/patients", (req, res) => {
  // Verify JWT token to get doctor_id
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    const { doctor_id } = jwt.verify(token, SECRET_KEY);
    console.log("Doctor ID:", doctor_id);

    // Fetch patient IDs assigned to the doctor
    const sql = `SELECT patient_id
                 FROM assign_doctor
                 WHERE doctor_id = ?`;

    db.query(sql, [doctor_id], (err, results) => {
      if (err) {
        console.log("Assign doctor query error:", err);
        return res.status(500).send("Internal server error");
      }

      console.log("Assign doctor results:", results);

      // Extract patient IDs from results
      const patientIds = results.map((result) => result.patient_id);
      console.log("Patient IDs:", patientIds);

      if (patientIds.length === 0) {
        // If no patients are assigned, return an empty array
        return res.status(200).json([]);
      }

      // Fetch detailed patient information based on patient IDs
      const patientSql = `SELECT * FROM patient WHERE patient_id IN (?)`;

      db.query(patientSql, [patientIds], (err, patientResults) => {
        if (err) {
          console.log("Patient query error:", err);
          return res.status(500).send("Internal server error");
        }

        console.log("Patients fetched:", patientResults);

        res.status(200).json(patientResults);
      });
    });
  } catch (error) {
    console.log("JWT verification error:", error);
    res.status(401).send("Unauthorized: Invalid token");
  }
});

// Route to get doctor's profile
doctor.get("/profile", (req, res) => {
  // Verify JWT token to get doctor_id
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  try {
    const { doctor_id } = jwt.verify(token, SECRET_KEY);

    // Fetch doctor's profile information
    const sql = `SELECT * FROM doctors WHERE doctor_id = ?`;
    db.query(sql, [doctor_id], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal server error");
      }
      if (result.length === 0) {
        return res.status(404).send("Doctor not found");
      }
      res.status(200).send(result[0]);
    });
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized: Invalid token");
  }
});

// Route to delete a doctor
doctor.post("/delete", (req, res) => {
  const { doctor_id } = req.body;

  // Delete doctor
  const del = `DELETE FROM doctors WHERE doctor_id = ?`;
  db.query(del, [doctor_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error deleting doctor");
    }
    res.status(200).send("Doctor deleted successfully");
  });
});

// Route to update doctor's salary
doctor.post("/update_sal", (req, res) => {
  const { doctor_id, salary } = req.body;

  // Update doctor's salary
  const upd = `UPDATE doctors SET salary = ? WHERE doctor_id = ?`;
  db.query(upd, [salary, doctor_id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error updating salary");
    }
    res.status(200).send("Salary updated successfully");
  });
});

module.exports = doctor;
