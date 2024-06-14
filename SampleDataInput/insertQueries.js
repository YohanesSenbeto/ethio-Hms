const connection = require("../utils/db");
const adminData = [
  [
    "John",
    "Doe",
    "john.doe@example.com",
    "1234567890",
    "CEO",
    "password123",
    "123 Main St",
    100000.0,
  ],
  [
    "Jane",
    "Smith",
    "jane.smith@example.com",
    "0987654321",
    "CTO",
    "password456",
    "456 Elm St",
    90000.0,
  ],
];

const adminQuery = `
  INSERT INTO admin (first_name, last_name, email, phone_no, designation, password, address, salary)
  VALUES ?
`;

connection.query(adminQuery, [adminData], (error, results) => {
  if (error) {
    console.error("Error inserting admin data:", error.stack);
    return;
  }
  console.log("Inserted admin data:", results);
});

// Mock data for the `users` table
const usersData = [
  ["Alice", "Johnson", "alice.johnson@example.com", "password789"],
  ["Bob", "Williams", "bob.williams@example.com", "password012"],
];

const usersQuery = `
  INSERT INTO users (first_name, last_name, email, password)
  VALUES ?
`;

connection.query(usersQuery, [usersData], (error, results) => {
  if (error) {
    console.error("Error inserting users data:", error.stack);
    return;
  }
  console.log("Inserted users data:", results);
});

// Mock data for the `patient` table
const patientData = [
  [
    "Tom",
    "Harris",
    "tom.harris@example.com",
    "1231231234",
    "789 Oak St",
    "password234",
    "Flu",
    "1980-01-01",
  ],
  [
    "Sara",
    "Brown",
    "sara.brown@example.com",
    "4321432143",
    "321 Pine St",
    "password345",
    "Cough",
    "1990-02-02",
  ],
];

const patientQuery = `
  INSERT INTO patient (first_name, last_name, email, phone_no, address, password, disease, date_of_birth)
  VALUES ?
`;

connection.query(patientQuery, [patientData], (error, results) => {
  if (error) {
    console.error("Error inserting patient data:", error.stack);
    return;
  }
  console.log("Inserted patient data:", results);
});

// Mock data for the `bill` table
const billData = [
  [1, 200.0, 150.0, 50.0, 300.0],
  [2, 100.0, 100.0, 20.0, 200.0],
];

const billQuery = `
  INSERT INTO bill (patient_id, medicine_cost, room_charge, misc_charge, operation_charge)
  VALUES ?
`;

connection.query(billQuery, [billData], (error, results) => {
  if (error) {
    console.error("Error inserting bill data:", error.stack);
    return;
  }
  console.log("Inserted bill data:", results);
});

// Mock data for the `doctor` table
const doctorData = [
  ["Emily", "Davis", "emily.davis@example.com", "5678567856", "Cardiology"],
  [
    "Michael",
    "Wilson",
    "michael.wilson@example.com",
    "6789678967",
    "Neurology",
  ],
];

const doctorQuery = `
  INSERT INTO doctor (first_name, last_name, email, phone_no, specialization)
  VALUES ?
`;

connection.query(doctorQuery, [doctorData], (error, results) => {
  if (error) {
    console.error("Error inserting doctor data:", error.stack);
    return;
  }
  console.log("Inserted doctor data:", results);
});

// Mock data for the `doctors` table
const doctorsData = [
  [
    "Laura",
    "Moore",
    "123 Birch St",
    "laura.moore@example.com",
    80000.0,
    "Pediatrics",
    "Day",
    "password678",
  ],
  [
    "James",
    "Taylor",
    "456 Cedar St",
    "james.taylor@example.com",
    85000.0,
    "Oncology",
    "Night",
    "password789",
  ],
];

const doctorsQuery = `
  INSERT INTO doctors (first_name, last_name, address, email, salary, specialisation, shift_time, password)
  VALUES ?
`;

connection.query(doctorsQuery, [doctorsData], (error, results) => {
  if (error) {
    console.error("Error inserting doctors data:", error.stack);
    return;
  }
  console.log("Inserted doctors data:", results);
});

// Mock data for the `assign_doctor` table
const assignDoctorData = [
  [1, 1],
  [2, 2],
];

const assignDoctorQuery = `
  INSERT INTO assign_doctor (patient_id, doctor_id)
  VALUES ?
`;

connection.query(assignDoctorQuery, [assignDoctorData], (error, results) => {
  if (error) {
    console.error("Error inserting assign_doctor data:", error.stack);
    return;
  }
  console.log("Inserted assign_doctor data:", results);
});

// Mock data for the `employees` table
const employeesData = [
  ["Anna", "Lee", "anna.lee@example.com", "password890", "Nurse"],
  [
    "Chris",
    "Martinez",
    "chris.martinez@example.com",
    "password901",
    "Technician",
  ],
];

const employeesQuery = `
  INSERT INTO employees (first_name, last_name, email, password, role)
  VALUES ?
`;

connection.query(employeesQuery, [employeesData], (error, results) => {
  if (error) {
    console.error("Error inserting employees data:", error.stack);
    return;
  }
  console.log("Inserted employees data:", results);
});

// Close the connection when done
connection.end();
