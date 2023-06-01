-- Use SQL to get the following from the database:
-- All items, ordered by price (lowest to highest).
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
-- All last names (no other columns!), in reverse alphabetical order (Z-A)


SELECT * FROM items ORDER BY price; -- Select all columns from the "items" table and order them by the "price" column in ascending order.

SELECT * FROM items WHERE price >= 80 ORDER BY price DESC; -- Select all columns from the "items" table where the "price" is greater than or equal to 80, and order them by the "price" column in descending order.

SELECT first_name FROM customers ORDER BY first_name LIMIT 3; -- Select only the "first_name" column from the "customers" table, order them by the "first_name" column in ascending order, and limit the results to 3.

SELECT last_name FROM customers ORDER BY last_name DESC; -- Select only the "last_name" column from the "customers" table and order them by the "last_name" column in descending order.
