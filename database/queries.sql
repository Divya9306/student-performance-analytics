USE student_performance_db;

-- =====================================
-- BASIC SELECT QUERIES
-- =====================================

SELECT * FROM Students;

SELECT * FROM Subjects;

SELECT * FROM Marks;

SELECT * FROM Attendance;


-- =====================================
-- FILTERING QUERIES
-- =====================================

SELECT *
FROM Students
WHERE department='CSE';

SELECT *
FROM Marks
WHERE marks > 80;


-- =====================================
-- AGGREGATE FUNCTIONS
-- =====================================

SELECT COUNT(*) AS total_students
FROM Students;

SELECT AVG(marks) AS average_marks
FROM Marks;

SELECT MAX(marks) AS highest_marks
FROM Marks;

SELECT MIN(marks) AS lowest_marks
FROM Marks;


-- =====================================
-- JOIN QUERIES
-- =====================================

SELECT
s.name,
m.marks
FROM Students s
INNER JOIN Marks m
ON s.student_id=m.student_id;

SELECT
s.name,
sub.subject_name,
m.marks
FROM Marks m
INNER JOIN Students s
ON m.student_id=s.student_id
INNER JOIN Subjects sub
ON m.subject_id=sub.subject_id;

SELECT
s.name,
m.marks
FROM Students s
LEFT JOIN Marks m
ON s.student_id=m.student_id;