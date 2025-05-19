-- Active: 1747464306999@@127.0.0.1@5432@postgres

SHOW timezone;

SELECT now()::date;

SELECT now()::time;

CREATE TABLE timeZ (
    ts TIMESTAMP without time zone,
    tsz TIMESTAMP with time zone
);

INSERT INTO
    timeZ
VALUES (
        '2022-01-01 00:00:00',
        '2022-01-01 00:00:00'
    );

SELECT * FROM timeZ;

SELECT CURRENT_DATE;

SELECT CURRENT_TIME;

SELECT age (CURRENT_DATE, '2002-12-10');

SELECT *, age (CURRENT_DATE, dob) FROM student;

SELECT extract( MONTH from dob ) FROM student;