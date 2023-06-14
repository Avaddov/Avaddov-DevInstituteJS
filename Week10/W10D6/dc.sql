-- Create the Customer table with columns id, first_name, and last_name
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL
);

-- Create the Customer Profile table with columns id, isLoggedIn, and customer_id
CREATE TABLE CustomerProfile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT false,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES Customer(id)
);

-- Insert customers into the Customer table
INSERT INTO Customer (first_name, last_name)
VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- Insert customer profiles using subqueries
INSERT INTO CustomerProfile (isLoggedIn, customer_id)
VALUES (true, (SELECT id FROM Customer WHERE first_name = 'John')),
       (false, (SELECT id FROM Customer WHERE first_name = 'Jerome')),
       (false, (SELECT id FROM Customer WHERE first_name = 'Lea'));

-- Retrieve first names of logged-in customers using INNER JOIN
SELECT c.first_name
FROM Customer c
INNER JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = true;

-- Retrieve first names and isLoggedIn columns for all customers using LEFT JOIN
SELECT c.first_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- Count the number of customers who are not logged in using LEFT JOIN and NULL filter
SELECT COUNT(*) AS num_customers_not_logged_in
FROM Customer c
LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
WHERE cp.customer_id IS NULL;

-- Create the Book table with columns book_id, title, and author
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL
);

-- Create the Student table with columns student_id, name, and age
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

-- Insert books into the Book table
INSERT INTO Book (title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
       ('Harry Potter', 'J.K Rowling'),
       ('To kill a mockingbird', 'Harper Lee');

-- Insert students into the Student table
INSERT INTO Student (name, age)
VALUES ('John', 12), ('Lera', 11), ('Patrick', 10), ('Bob', 14);

-- Create the Library table with columns book_fk_id, student_fk_id, and borrowed_date
CREATE TABLE Library (
  book_fk_id INT,
  student_fk_id INT,
  borrowed_date DATE,
  FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);

-- Insert records into the Library table using subqueries
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'John'), '2022-02-15'),
       ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-03-03'),
       ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'), (SELECT student_id FROM Student WHERE name = 'Lera'), '2021-05-23'),
       ((SELECT book_id FROM Book WHERE title = 'Harry Potter'), (SELECT student_id FROM Student WHERE name = 'Bob'), '2021-08-12');

-- Select all columns from the Library table
SELECT *
FROM Library;

-- Select the name of the student and the title of the borrowed books using joins
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- Select the average age of children who borrowed the book "Alice in Wonderland" using joins and a WHERE clause
SELECT AVG(s.age) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';
