-- Create the admin table
CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone_no` VARCHAR(20) NOT NULL,
  `designation` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `address` TEXT,
  `salary` DECIMAL(10, 2) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;

-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;

-- Create the patient table
CREATE TABLE IF NOT EXISTS `patient` (
  `patient_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone_no` VARCHAR(20) NOT NULL,
  `address` TEXT,
  `password` VARCHAR(255) NOT NULL,
  `disease` VARCHAR(255),
  `date_of_birth` DATE,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;

-- Create the bill table
CREATE TABLE IF NOT EXISTS `bill` (
  `bill_id` INT PRIMARY KEY AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `medicine_cost` DECIMAL(10, 2) DEFAULT 0,
  `room_charge` DECIMAL(10, 2) DEFAULT 0,
  `misc_charge` DECIMAL(10, 2) DEFAULT 0,
  `operation_charge` DECIMAL(10, 2) DEFAULT 0,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`patient_id`) REFERENCES `patient`(`patient_id`)
) ENGINE=InnoDB;

-- Create the doctor table
CREATE TABLE IF NOT EXISTS `doctor` (
  `doctor_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone_no` VARCHAR(20) NOT NULL,
  `specialization` VARCHAR(255),
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;


-- Create the doctors table
CREATE TABLE IF NOT EXISTS `doctors` (
  `doctor_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `address` TEXT NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `salary` DECIMAL(10, 2) NOT NULL,
  `specialisation` VARCHAR(255) NOT NULL,
  `shift_time` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;

-- Create the assign_doctor table
CREATE TABLE IF NOT EXISTS `assign_doctor` (
  `assign_id` INT PRIMARY KEY AUTO_INCREMENT,
  `patient_id` INT NOT NULL,
  `doctor_id` INT NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`patient_id`) REFERENCES `patient`(`patient_id`),
  FOREIGN KEY (`doctor_id`) REFERENCES `doctors`(`doctor_id`)
) ENGINE=InnoDB;

-- Create the employees table
CREATE TABLE IF NOT EXISTS `employees` (
  `employee_id` INT PRIMARY KEY AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) NOT NULL,
  `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX (`email`)
) ENGINE=InnoDB;
