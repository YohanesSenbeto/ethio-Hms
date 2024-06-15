function insertAdminData() {
  return [
    {
      first_name: "Admin1",
      last_name: "Smith",
      email: "admin1@example.com",
      phone_no: "1234567890",
      designation: "Administrator",
      password: "$2a$10$Sewk9rC5u1e6heZYcN4UsO34cNCnWDv9Z2bHmC5P0DnFs1fOMcZL2",
      address: "123 Admin St",
      salary: 90000.0,
    },
    {
      first_name: "Admin2",
      last_name: "Johnson",
      email: "admin2@example.com",
      phone_no: "2345678901",
      designation: "Manager",
      password: "$2a$10$tycY1mJb8dUvUd/bJbGy..itvA14k7.SRaCz2.bC3cYbjYb1eAb.C",
      address: "456 Admin Ave",
      salary: 85000.0,
    },
    {
      first_name: "Admin3",
      last_name: "Williams",
      email: "admin3@example.com",
      phone_no: "3456789012",
      designation: "Supervisor",
      password: "$2a$10$VlGyOtg2Y8fHmYcX6ZiB.uLZ65DO.dU1v2Uc2jy2G3ZPVOrv/qRZu",
      address: "789 Admin Blvd",
      salary: 80000.0,
    },
    {
      first_name: "Admin4",
      last_name: "Brown",
      email: "admin4@example.com",
      phone_no: "4567890123",
      designation: "Administrator",
      password: "$2a$10$BZ7lJmTtN1/UDNHLF4b3y.6ezAXVLoY7b1YF/eu.d64YKZDVg4T7C",
      address: "101 Admin Lane",
      salary: 95000.0,
    },
    {
      first_name: "Admin5",
      last_name: "Davis",
      email: "admin5@example.com",
      phone_no: "5678901234",
      designation: "Manager",
      password: "$2a$10$ThpumPwM/pShoyhUtJ7whOCFeuI2MQCGF/R.D3eV2k4WRic1/UuIm",
      address: "222 Admin Road",
      salary: 88000.0,
    },
  ];
}

function insertAssignDoctorData() {
  return [
    { patient_id: 1, doctor_id: 1 },
    { patient_id: 2, doctor_id: 2 },
    { patient_id: 3, doctor_id: 1 },
    { patient_id: 4, doctor_id: 3 },
    { patient_id: 5, doctor_id: 2 },
  ];
}

function insertPatientData() {
  return [
    {
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      phone_no: "9876543210",
      address: "456 Health St",
      date_of_birth: "1990-05-15",
    },
    {
      first_name: "Bob",
      last_name: "Smith",
      email: "bob.smith@example.com",
      phone_no: "8765432109",
      address: "789 Medical Ave",
      date_of_birth: "1985-10-22",
    },
    {
      first_name: "Charlie",
      last_name: "Brown",
      email: "charlie.brown@example.com",
      phone_no: "7654321098",
      address: "321 Wellness Blvd",
      date_of_birth: "1992-08-10",
    },
    {
      first_name: "Diana",
      last_name: "Williams",
      email: "diana.williams@example.com",
      phone_no: "6543210987",
      address: "555 Care Lane",
      date_of_birth: "1988-03-25",
    },
    {
      first_name: "Eva",
      last_name: "Davis",
      email: "eva.davis@example.com",
      phone_no: "5432109876",
      address: "888 Health Road",
      date_of_birth: "1995-11-30",
    },
  ];
}
function insertBillData() {
  return [
    {
      patient_id: 1,
      medicine_cost: 100.0,
      room_charge: 200.0,
      misc_charge: 50.0,
      operation_charge: 500.0,
    },
    {
      patient_id: 2,
      medicine_cost: 150.0,
      room_charge: 300.0,
      misc_charge: 75.0,
      operation_charge: 600.0,
    },
    {
      patient_id: 3,
      medicine_cost: 120.0,
      room_charge: 250.0,
      misc_charge: 60.0,
      operation_charge: 550.0,
    },
    {
      patient_id: 4,
      medicine_cost: 130.0,
      room_charge: 280.0,
      misc_charge: 55.0,
      operation_charge: 520.0,
    },
    {
      patient_id: 5,
      medicine_cost: 110.0,
      room_charge: 230.0,
      misc_charge: 45.0,
      operation_charge: 480.0,
    },
  ];
}
function insertDoctorData() {
  return [
    {
      first_name: "Dr. Emma",
      last_name: "Wilson",
      email: "emma.wilson@example.com",
      phone_no: "9876543210",
      specialization: "Cardiology",
    },
    {
      first_name: "Dr. James",
      last_name: "Brown",
      email: "james.brown@example.com",
      phone_no: "8765432109",
      specialization: "Pediatrics",
    },
    {
      first_name: "Dr. Olivia",
      last_name: "Smith",
      email: "olivia.smith@example.com",
      phone_no: "7654321098",
      specialization: "Orthopedics",
    },
    {
      first_name: "Dr. Ethan",
      last_name: "Davis",
      email: "ethan.davis@example.com",
      phone_no: "6543210987",
      specialization: "Neurology",
    },
    {
      first_name: "Dr. Sophia",
      last_name: "Johnson",
      email: "sophia.johnson@example.com",
      phone_no: "5432109876",
      specialization: "Dermatology",
    },
  ];
}
function insertEmployeesData() {
  return [
    {
      first_name: "Emily",
      last_name: "Johnson",
      email: "emily.johnson@example.com",
      password: "$2a$10$1j53EnT4ALY6b0pBbftPweh0Kg6.BfG06JnK.s2W4uUlyVUZJoKFi",
      role: "Nurse",
    },
    {
      first_name: "Mark",
      last_name: "Smith",
      email: "mark.smith@example.com",
      password: "$2a$10$RHUg4TLQeOC9gYYH96yXaex8ML3xHbyTffVpVhe8MO4SVqYy5bBca",
      role: "Receptionist",
    },
    {
      first_name: "Sophie",
      last_name: "Brown",
      email: "sophie.brown@example.com",
      password: "$2a$10$TlXbbP0wMAJjKQXQ1rYscujAemn/p89f1M6KleZyOMGeH0vqPyroW",
      role: "Technician",
    },
    {
      first_name: "Michael",
      last_name: "Davis",
      email: "michael.davis@example.com",
      password: "$2a$10$Sn4aFr0Y5CFMRPPv/LT43eQHkF4tMXUz7/8ppAxk9MXm36AVIirBu",
      role: "Pharmacist",
    },
    {
      first_name: "Lily",
      last_name: "Wilson",
      email: "lily.wilson@example.com",
      password: "$2a$10$TqZiwy4/uyD1v/RJ/8A.r.YRmpV5cgG87pt.x4NfOyWV5S6MjKnZG",
      role: "Accountant",
    },
  ];
}
function insertUsersData() {
  return [
    {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      password: "$2a$10$vIM5j1tfF.1L7J7wXb/VCO/H72OcH/IVZchXRGbPhvU.rJUL8PP5S",
    },
    {
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      password: "$2a$10$V3jjyEj3sJQAK5YP0x9tSe5eZ4RkTjJ75nJrUMWRz1lfgHmG6w5IC",
    },
    {
      first_name: "Michael",
      last_name: "Johnson",
      email: "michael.johnson@example.com",
      password: "$2a$10$HV69kWZBlcV53UugcBBgX..LpTCq4yHL7msF5Y1KEOe5gW6.g1fiW",
    },
    {
      first_name: "Emily",
      last_name: "Williams",
      email: "emily.williams@example.com",
      password: "$2a$10$HX77iN5cMXzMZ1Z8aSbb0eb5XblJW96W8fU6a.8vCGZKzUCkUZl96",
    },
    {
      first_name: "Daniel",
      last_name: "Brown",
      email: "daniel.brown@example.com",
      password: "$2a$10$PId6/6.SB1qD.mUpwsCK7eiOg6KJHfPrvT76dcUS5zEXZoR4o3NXe",
    },
  ];
}
function insertAssignDoctorData() {
  return [
    { patient_id: 1, doctor_id: 1 },
    { patient_id: 2, doctor_id: 2 },
    { patient_id: 3, doctor_id: 3 },
    { patient_id: 4, doctor_id: 4 },
    { patient_id: 5, doctor_id: 5 },
  ];
}
function insertEmployeesData() {
  return [
    {
      first_name: "Emily",
      last_name: "Davis",
      email: "emily.davis@example.com",
      password: "$2a$10$CQljfe1Hudg0Nt4HW5M3j.SweWWkeKt9O5E4H7e/IDYsdsP1rPmXa",
      role: "Nurse",
    },
    {
      first_name: "Adam",
      last_name: "Wilson",
      email: "adam.wilson@example.com",
      password: "$2a$10$34XzNR9Syhe/J7R1J2F.Ce5yH3dGLM2ZJciJXnJ7ELv5xY/kcNKd6",
      role: "Receptionist",
    },
    {
      first_name: "Sophia",
      last_name: "Gonzalez",
      email: "sophia.gonzalez@example.com",
      password: "$2a$10$HQQzL5ZuA9UUn8C53yf.WupkyE45w2KxtHicGzy45MmnbC9eG5.iS",
      role: "Technician",
    },
    {
      first_name: "Oliver",
      last_name: "Martinez",
      email: "oliver.martinez@example.com",
      password: "$2a$10$gOqTVrB9jFzSQZb2G2wMtOBb4QGc1eQQwJt1eI6p5VSY0zv6Tx0lG",
      role: "Pharmacist",
    },
    {
      first_name: "Grace",
      last_name: "Lopez",
      email: "grace.lopez@example.com",
      password: "$2a$10$X2dGCrUJLlPnlFnnZLYw8eS8RX.Hn2Zdf19J0JReGzg5cvRqkYujK",
      role: "Accountant",
    },
  ];
}

module.exports = {
  insertAdminData,
  insertAssignDoctorData,
  insertPatientData,
  insertBillData,
  insertDoctorData,
  insertEmployeesData,
  insertUsersData,
  insertAssignDoctorData,
  insertEmployeesData,
};
