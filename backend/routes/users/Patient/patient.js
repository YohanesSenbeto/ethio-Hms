const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const patient = express.Router();

const db = require("../../../utils/db");

process.env.SECRET_KEY = "Arijit";

patient.post("/register", (req, res) => {
  const patientData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    email: req.body.email,
    phone_no: req.body.phone_no,
    password: req.body.password,
    disease: req.body.disease,
  };

  const find = `SELECT * FROM patient WHERE email = ?`;

  db.query(find, [patientData.email], (err1, result1) => {
    console.log("Finding patient by email:", patientData.email);
    if (err1) {
      console.log("Error finding patient:", err1);
      return res.status(500).send("Error on the server.");
    }
    console.log("Result of finding patient:", result1);

    if (result1.length === 0) {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log("Error hashing password:", err);
          return res.status(500).send("Error hashing the password.");
        }
        patientData.password = hash;

        const create = `INSERT INTO patient (first_name, last_name, address, email, phone_no, password, disease)
                        VALUES (?, ?, ?, ?, ?, ?, ?)`;

        db.query(
          create,
          [
            patientData.first_name,
            patientData.last_name,
            patientData.address,
            patientData.email,
            patientData.phone_no,
            patientData.password,
            patientData.disease,
          ],
          (err2, result2) => {
            if (err2) {
              console.log("Error creating patient:", err2);
              return res.status(500).send("Error creating the patient.");
            }
            console.log("Patient created:", result2);

            const patient_id = result2.insertId;
            console.log("New patient ID:", patient_id);
            const bill = `INSERT INTO bill (patient_id) VALUES (?)`;

            db.query(bill, [patient_id], (err3, result3) => {
              if (err3) {
                console.log("Error creating bill:", err3);
                return res.status(500).send("Error creating the bill.");
              }
              console.log("Bill created for patient ID:", patient_id, result3);
              res.send("Patient and bill created successfully.");
            });
          }
        );
      });
    } else {
      res.status(400).send("User already exists.");
    }
  });
});

patient.post("/login", (req, res) => {
  const find = `SELECT password, patient_id FROM patient WHERE email = ?`;

  db.query(find, [req.body.email], (err, result) => {
    console.log("Finding patient by email for login:", req.body.email);
    if (err) {
      console.log("Error finding patient for login:", err);
      return res.status(500).send("Error on the server.");
    }
    console.log("Result of finding patient for login:", result);

    if (result.length > 0) {
      if (bcrypt.compareSync(req.body.password, result[0].password)) {
        const token = jwt.sign(
          { patient_id: result[0].patient_id },
          process.env.SECRET_KEY
        );
        console.log("Login successful, token generated:", token);
        res.send(token);
      } else {
        res.status(400).json({ error: "Password incorrect" });
      }
    } else {
      res.status(404).json({ error: "Email not found" });
    }
  });
});

patient.get("/profile", (req, res) => {
  const decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  const patient_id = decoded.patient_id;

  console.log("Fetching profile for patient ID:", patient_id);

  const find = `SELECT * FROM patient WHERE patient_id = ?`;
  db.query(find, [patient_id], (err, result) => {
    if (err) {
      console.log("Error fetching profile:", err);
      return res.status(500).send("Error on the server.");
    }
    console.log("Profile data:", result);
    res.send(result);
  });
});

patient.get("/details", (req, res) => {
  const decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  const patient_id = decoded.patient_id;

  console.log("Fetching details for patient ID:", patient_id);

  const find = `SELECT * FROM patient WHERE patient_id = ?`;
  db.query(find, [patient_id], (err, result) => {
    if (err) {
      console.log("Error fetching details:", err);
      return res.status(500).send("Error on the server.");
    }
    console.log("Details data:", result);
    res.send(result);
  });
});

patient.get("/doctor", (req, res) => {
  const decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  const patient_id = decoded.patient_id;

  console.log("Fetching doctor information for patient ID:", patient_id);

  const query = `SELECT 
                  d.first_name as doctor_firstname,
                  d.last_name as doctor_lastname,
                  d.specialisation 
                FROM assign_doctor ad
                JOIN patient p ON p.patient_id = ad.patient_id
                JOIN doctors d ON ad.doctor_id = d.doctor_id
                WHERE p.patient_id = ?`;

  db.query(query, [patient_id], (err, result) => {
    if (err) {
      console.log("Error fetching doctor information:", err);
      return res.status(500).send("Error on the server.");
    }
    console.log("Doctor information:", result);
    res.send(result);
  });
});

patient.get("/bill", (req, res) => {
  const decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );
  const patient_id = decoded.patient_id;

  console.log("Fetching bill information for patient ID:", patient_id);

  const query = `SELECT * FROM bill WHERE patient_id = ?`;
  db.query(query, [patient_id], (err, result) => {
    if (err) {
      console.log("Error fetching bill information:", err);
      return res.status(500).send("Error on the server.");
    }
    console.log("Bill information:", result);
    res.send(result);
  });
});

module.exports = patient;
