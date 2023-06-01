UPDATE actors
SET first_name = 'Maty'
WHERE first_name = 'Matt' AND last_name = 'Damon';
 
UPDATE actors
SET number_oscars = 4
WHERE first_name = 'George' AND last_name = 'Clooney'
RETURNING actor_id, first_name, last_name, number_oscars;

ALTER TABLE actors
RENAME COLUMN age TO birthdate;

DELETE FROM actors
WHERE actor_id = 5 -- Assuming actor_id 5 is the record you want to delete
RETURNING actor_id, first_name, last_name, number_oscars;


SELECT COUNT(*) AS actor_count FROM actors;
