-- Create the public database
CREATE DATABASE public;

-- Switch to the public database
USE public;

-- Create the items table
CREATE TABLE items (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    price INT
);

-- Create the customers table
CREATE TABLE customers (
    id INT PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100)
);

-- Insert data into the items table
INSERT INTO items (id, name, price) VALUES
(1, 'Small Desk', 100),
(2, 'Large Desk', 300),
(3, 'Fan', 80);

-- Insert data into the customers table
INSERT INTO customers (id, firstname, lastname) VALUES
(1, 'Greg', 'Jones'),
(2, 'Sandra', 'Jones'),
(3, 'Scott', 'Scott'),
(4, 'Trevor', 'Green'),
(5, 'Melanie', 'Johnson');

-- Fetch all items
SELECT * FROM items;

-- Fetch items with a price above 80 (80 not included)
SELECT * FROM items WHERE price > 80;

-- Fetch items with a price below 300 (300 included)
SELECT * FROM items WHERE price <= 300;

-- Fetch customers whose last name is 'Smith'
SELECT * FROM customers WHERE lastname = 'Smith';

-- Fetch customers whose last name is 'Jones'
SELECT * FROM customers WHERE lastname = 'Jones';

-- Fetch customers whose firstname is not 'Scott'
SELECT * FROM customers WHERE firstname != 'Scott';
