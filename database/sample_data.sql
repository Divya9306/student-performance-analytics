USE student_performance_db;
describe students;
INSERT INTO Students 

(name,email_ID,department,admission_date)
VALUES
('Rahul Sharma','rahul@gmail.com','CSE','2024-01-10'),
('Priya Singh','priya@gmail.com','IT','2024-01-12'),
('Arjun Kumar','arjun@gmail.com','ECE','2024-01-15'),
('Neha Verma','neha@gmail.com','CSE','2024-01-18');
SELECT * FROM Students;


INSERT INTO Subjects(subject_name)
VALUES('Mathematics'),
('Physics'),
('Chemistry'),
('English'),
('Computer Science');
SELECT * FROM Subjects;

INSERT INTO Marks(student_id,subject_id,marks)
VALUES
(1,1,95),
(1,2,88),
(1,3,91),

(2,1,82),
(2,2,76),
(2,3,85),

(3,1,78),
(3,2,80),
(3,3,84);

SELECT * FROM Marks;

INSERT INTO Attendance
(student_id,present_days,total_days)
VALUES
(1,90,100),
(2,85,100),
(3,88,100),
(4,92,100);

SELECT * FROM Attendance;

SELECT *
FROM Students
WHERE student_id = 3;

ALTER TABLE Students AUTO_INCREMENT = 3;

describe students;

ALTER TABLE Students
RENAME COLUMN email_id TO email_ID;