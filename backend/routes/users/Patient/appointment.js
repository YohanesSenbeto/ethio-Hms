const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

const db = require("../../../utils/db");

const SECRET_KEY = "Arijit";

router.get("/appointment", (req, res) => {
  const user_id = jwt.verify(req.headers["authorization"], SECRET_KEY);
});
