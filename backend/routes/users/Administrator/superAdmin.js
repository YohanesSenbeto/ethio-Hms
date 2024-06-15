const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const superAdmin = express.Router();

const db = require("../../../utils/db");

// Use dotenv for managing environment variables
require("dotenv").config();

// Ensure SECRET_KEY is set in environment variables
const secretKey = process.env.SECRET_KEY;

superAdmin.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Check if superAdmin already exists
  let find = `SELECT * FROM superAdmin WHERE email = "${email}"`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }

    if (result.length > 0) {
      return res.status(400).send("Super Admin already exists");
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }

      // Store new superAdmin in the database
      let create = `INSERT INTO superAdmin (email, password)
                    VALUES ("${email}", "${hash}")`;

      db.query(create, (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).send("Internal Server Error");
        }
        res.status(201).send("Super Admin created successfully");
      });
    });
  });
});

superAdmin.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find superAdmin by email
  let find = `SELECT * FROM superAdmin WHERE email = "${email}"`;

  db.query(find, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Internal Server Error");
    }

    if (result.length === 0) {
      return res.status(404).send("Email not found");
    }

    // Compare passwords
    bcrypt.compare(password, result[0].password, (err, isMatch) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }

      if (!isMatch) {
        return res.status(401).send("Password incorrect");
      }

      // Create and send JWT token
      let token = jwt.sign(
        { superAdmin_id: result[0].superAdmin_id },
        secretKey
      );
      res.status(200).json({ token });
    });
  });
});

superAdmin.get("/profile", (req, res) => {
  try {
    const superAdmin_id = jwt.verify(
      req.headers.authorization,
      secretKey
    ).superAdmin_id;

    // Fetch superAdmin profile from database
    let sql = `SELECT * FROM superAdmin WHERE superAdmin_id = ${superAdmin_id}`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
      }
      if (result.length === 0) {
        return res.status(404).send("Super Admin not found");
      }
      res.status(200).json(result[0]);
    });
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
});

module.exports = superAdmin;
