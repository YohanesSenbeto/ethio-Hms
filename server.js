const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const sanitize = require("sanitize");

// Initialize dotenv to load environment variables from a .env file
dotenv.config();

// Create an instance of express
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(bodyParser.json()); // Parse JSON bodies for older bodyParser
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(sanitize.middleware); // Sanitize inputs

// Routes
const UsersRouter = require("./routes/users");
const PatientRouter = require("./routes/users/Patient/patient");
const EmployeeRouter = require("./routes/users/Employee/employee");
const DoctorRouter = require("./routes/users/Doctor/docter");
const AdminRouter = require("./routes/users/Administrator/admin");
const SuperAdminRouter = require("./routes/users/Administrator/superAdmin");
const ApiRouter = require("./routes/api/api");
const indexRouter = require("./routes/index");

// Mounting routers
app.use(indexRouter);
app.use("/users", UsersRouter);
app.use("/patient", PatientRouter);
app.use("/employee", EmployeeRouter);
app.use("/doctor", DoctorRouter);
app.use("/admin", AdminRouter);
app.use("/super", SuperAdminRouter);
app.use("/api", ApiRouter);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, "client/build")));

// Serve React app for any other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

// Set up the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
