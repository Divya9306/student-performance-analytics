CREATE DATABASE student_performance_db;
USE student_performance_db;

CREATE TABLE Students(
	student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email_ID VARCHAR(100) UNIQUE,
    department VARCHAR(100),
    admission_date DATE
);

SHOW TABLES;
SELECT * FROM Students;


CREATE TABLE Subjects(
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    subject_name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Marks(
    mark_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    marks INT NOT NULL,
    

    FOREIGN KEY(student_id)
        REFERENCES Students(student_id)
        ON DELETE CASCADE,

    FOREIGN KEY(subject_id)
        REFERENCES Subjects(subject_id)
);

CREATE TABLE Attendance(
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNIQUE,
    present_days INT DEFAULT 0,
    total_days INT DEFAULT 0,

    FOREIGN KEY(student_id)
        REFERENCES Students(student_id)
        ON DELETE CASCADE
);
