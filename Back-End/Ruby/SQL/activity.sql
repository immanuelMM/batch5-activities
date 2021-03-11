CREATE TABLE 
students (id integer, first_name VARCHAR(25),middle_name VARCHAR(25),last_name VARCHAR(25), age integer ,location VARCHAR(25));


INSERT INTO students (id, first_name, middle_name,last_name,age,location) 
	VALUES(1,'Juan','Blank','Cruz',18,'Manila'),
    (2,'Jhon','Blank','Young',20,'Manila'),
    (3,'Victor','Blank','Rivera',21,'Manila'),
    (4,'Adrian','Blank','Co',19,'Laguna'),
    (5,'Pau','Blank','Riosa',22,'Marikina'),
    (6,'Piolo','Blank','Pascual',25,'Manila');

UPDATE students
SET first_name = 'Ana',
    middle_name = 'CUi',
    last_name = 'Cajocson',
    age = 25,
    location = 'Bulacan'
HERE id = 1


DELETE FROM students WHERE id = 6

-- activiity 2

SELECT COUNT(id) AS numberofstuden FROM students;

SELECT * FROM students WHERE location = 'Manila'

SELECT AVG(age) AS AverageAge FROM students;

SELECT age FROM students
ORDER BY age DESC 

-- activity 3

CREATE TABLE 
classrooms (id integer, student_id integer,section VARCHAR(10)));

INSERT INTO classrooms (id, student_id, section) 
	VALUES(1,2,'A'),
    (2,2,'A'),
    (3,3,'A'),
    (4,4,'B'),
    (5,5,'C'),
    (6,6,'A'),
    (7,7,'C'),
    (8,8,'B'),
    (9,9,'B'),
    (10,10,'C');

SELECT student_id
FROM classrooms
INNER JOIN students
ON students.id = classrooms.student_id;

SELECT student_id
FROM classrooms
LEFT JOIN students
ON students.id = classrooms.student_id;

