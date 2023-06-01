-- 1. Create the database called "bootcamp":
CREATE DATABASE bootcamp;

-- 2. Switch to the "bootcamp" database:
USE bootcamp;

-- 3. Create the "students" table with the specified columns:
CREATE TABLE students (
  id INT AUTO_INCREMENT,
  last_name VARCHAR(50),
  first_name VARCHAR(50),
  birth_date DATE,
  PRIMARY KEY (id)
);

-- 4. Insert the provided data into the "students" table in a single query:
INSERT INTO students (first_name, last_name, birth_date)
VALUES
  ('Marc', 'Benichou', '1998-11-02'),
  ('Yoan', 'Cohen', '2010-12-03'),
  ('Lea', 'Benichou', '1987-07-27'),
  ('Amelia', 'Dux', '1996-04-07'),
  ('David', 'Grez', '2003-06-14'),
  ('Omer', 'Simpson', '1980-10-03');

-- 5. Fetch all data from the "students" table:
SELECT * FROM students;

-- 6. Fetch the first_name and last_name of all students:
SELECT first_name, last_name FROM students;

-- 7. Fetch the first_name and last_name of the student with id = 2:
SELECT first_name, last_name FROM students WHERE id = 2;

-- 8. Fetch the first_name and last_name of the student with last_name = 'Benichou' and first_name = 'Marc':
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- 9. Fetch the first_name and last_name of the students with last_name = 'Benichou' OR first_name = 'Marc':
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- 10. Fetch the first_name and last_name of the students whose first_names contain the letter 'a':
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a%';

-- 11. Fetch the first_name and last_name of the students whose first_names start with the letter 'a':
SELECT first_name, last_name FROM students WHERE first_name LIKE 'a%';

-- 12. Fetch the first_name and last_name of the students whose first_names end with the letter 'a':
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a';

-- 13. Fetch the first_name and last_name of the students whose second to last letter of their first_names is 'a':
SELECT first_name, last_name FROM students WHERE first_name LIKE '_a%a';

-- 14. Fetch the first_name and last_name of the students whose ids are 1 and 3:
SELECT first_name, last_name FROM students WHERE id IN (1, 3);

-- 15. Fetch all the information of the students whose birth_dates are on or after 2000-01-01:
SELECT * FROM students WHERE birth_date >= '2000-01-01';
