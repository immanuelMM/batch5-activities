CREATE TABLE students (id integer, first_name VARCHAR(25),middle_name VARCHAR(25),last_name VARCHAR(25), age integer ,location VARCHAR(25));


INSERT INTO students (id, first_name, middle_name,last_name,age,location) 
	VALUES(1,'Juan','Blank','Cruz',18,'Manila'),
    (2,'Jhon','Blank','Young',20,'Manila'),
    (3,'Victor','Blank','Rivera',21,'Manila'),
    (4,'Adrian','Blank','Co',19,'Laguna'),
    (5,'Pau','Blank','Riosa',22,'Marikina'),
    (6'Piolo','Blank','Pascual',25,'Manila');

UPDATE students
SET first_name = 'Ana',
    middle_name = 'CUi',
    last_name = 'Cajocson',
    age = 25,
    location = 'Bulacan'
HERE id = 1


DELETE FROM students WHERE id = 6

