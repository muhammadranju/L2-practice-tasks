-- Active: 1747326886496@@127.0.0.1@5432@postgres
SELECT * FROM person;

ALTER TABLE person ADD COLUMN email varchar(100) DEFAULT 'no email';

ALTER TABLE person DROP COLUMN age;

ALTER TABLE person ALTER COLUMN name SET NOT NULL;