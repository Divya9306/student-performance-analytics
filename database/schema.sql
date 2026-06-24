CREATE DATABASE student_performance_db;
USE student_performance_db;

CREATE TABLE Students(
	student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email_id VARCHAR(100) UNIQUE,
    department VARCHAR(100),
    admission_date DATE
);

SHOW TABLES;
SELECT * FROM Students;
DELETE FROM Students
WHERE student_id = 1;