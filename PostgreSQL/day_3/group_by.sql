-- Active: 1747464306999@@127.0.0.1@5432@postgres

SELECT country, COUNT(*) as counts FROM student GROUP BY country;

SELECT country, COUNT(*) as counts, avg(age)
FROM student
GROUP BY
    country;

SELECT country, COUNT(*) as counts, avg(age)
FROM student
GROUP BY
    country
HAVING
    avg(age) > 20;

SELECT extract(
        YEAR
        FROM dob
    ) as birth_year, count(*)
FROM student
GROUP BY
    birth_year;