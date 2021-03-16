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



-- activity 12/03/2021 - friday
Database: dvdrental
-- 0. Display the number of unique inventory rented and the total number of inventory rented
-- Column => unique_inventory_rented, total_inventory_rented
-- Answer => 1 row
-- 1. List all the films of Dan Torn and Dan Streep. Sort by film_title alphabetical order
-- Column => film_title, release_year, and rating, and actor_full_name. 
-- Answer => 46 rows
-- 2. List all Comedy films of all actors whose last names start with 'D'. Sort by actor_full_name alphabetical order
-- Column => actor_full_name, film_title, category_name
-- Answer => 34 rows
-- 3. Determine the potential number of customers a store staff would serve (count the number of customer in the same country as the staff)
-- Column => staff_full_name, customer_count
-- Answer => 2 rows
-- 0
SELECT COUNT (DISTINCT r.inventory_id) AS "unique_inventory_rented", COUNT (r.inventory_id) AS "TOtal_inventory_rented"
FROM rental as r
LEFT JOIN inventory as i ON i.inventory_id = r.inventory_id;
-- 1

-- activity 13/03/2021 - saturday part 2
-- 4. Find the most popular film category per store (determined by the number of rentals)
-- Column => store_id, film_count, category_name
-- Answer => 2 rows
SELECT c.name,COUNT (f.rental_id)
FROM category AS c
LEFT JOIN film_category AS s ON s.category_id = c.category_id
LEFT JOIN rental as f ON f.rental_id = c.category_id
GROUP BY c.name
-- 5. Rank the top 5 actors per country (determined by the number rentals) sort by most popular to least popular
-- Column => country, actor_full_name, actor_rank, rent_count
-- Answer => 10 rows


