-- Active: 1747326886496@@127.0.0.1@5432@postgres
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100),
    dod DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
);

INSERT INTO
    students (
        first_name,
        last_name,
        age,
        grade,
        course,
        email,
        dod,
        blood_group,
        country
    ) (
        'Rahim',
        'Uddin',
        20,
        'A+',
        'Computer Science',
        'rahim@example.com',
        '2023-01-15',
        'O+',
        'Bangladesh'
    ),
    (
        'Karim',
        'Hossain',
        22,
        'B',
        'Electrical Engineering',
        'karim@example.com',
        '2022-09-10',
        'A+',
        'Bangladesh'
    ),
    (
        'Ayesha',
        'Akter',
        19,
        'A',
        'Business Administration',
        'ayesha@example.com',
        '2023-03-01',
        'B+',
        'India'
    ),
    (
        'John',
        'Doe',
        21,
        'C+',
        'Mechanical Engineering',
        'john.doe@example.com',
        '2021-11-20',
        'AB-',
        'USA'
    ),
    (
        'Maria',
        'Gomez',
        23,
        'B-',
        'Data Science',
        'maria.gomez@example.com',
        '2024-02-18',
        'O-',
        'Spain'
    ),
    (
        'Mehedi',
        'Hasan',
        24,
        'A',
        'Software Engineering',
        'mehedi@example.com',
        '2022-06-12',
        'B-',
        'Bangladesh'
    ),
    (
        'Sadia',
        'Khan',
        20,
        'A-',
        'Pharmacy',
        'sadia.khan@example.com',
        '2023-07-01',
        'O+',
        'Bangladesh'
    ),
    (
        'Tom',
        'Smith',
        22,
        'B+',
        'Mathematics',
        'tom.smith@example.com',
        '2021-08-05',
        'A-',
        'Canada'
    ),
    (
        'Emily',
        'Stone',
        21,
        'A+',
        'Architecture',
        'emily.stone@example.com',
        '2022-03-17',
        'B+',
        'Australia'
    ),
    (
        'Ali',
        'Reza',
        25,
        'C',
        'Physics',
        'ali.reza@example.com',
        '2021-12-11',
        'O-',
        'Pakistan'
    ),
    (
        'Fatima',
        'Noor',
        23,
        'B',
        'Biochemistry',
        'fatima.noor@example.com',
        '2023-09-22',
        'AB+',
        'Bangladesh'
    ),
    (
        'Omar',
        'Faruk',
        22,
        'A-',
        'Civil Engineering',
        'omar.faruk@example.com',
        '2022-04-30',
        'B+',
        'Bangladesh'
    ),
    (
        'Linda',
        'Brown',
        20,
        'B+',
        'Political Science',
        'linda.brown@example.com',
        '2021-10-19',
        'A+',
        'UK'
    ),
    (
        'Sami',
        'Yusuf',
        21,
        'A',
        'Sociology',
        'sami.yusuf@example.com',
        '2023-01-25',
        'O-',
        'Egypt'
    ),
    (
        'Nadia',
        'Rahman',
        19,
        'A+',
        'Finance',
        'nadia.rahman@example.com',
        '2022-11-03',
        'B-',
        'Bangladesh'
    ),
    (
        'Zahid',
        'Islam',
        23,
        'C+',
        'English Literature',
        'zahid.islam@example.com',
        '2024-01-10',
        'AB-',
        'Bangladesh'
    ),
    (
        'Robert',
        'Taylor',
        24,
        'B-',
        'Statistics',
        'robert.taylor@example.com',
        '2021-09-01',
        'A-',
        'USA'
    ),
    (
        'Anika',
        'Sultana',
        20,
        'A',
        'Fashion Design',
        'anika.sultana@example.com',
        '2023-05-18',
        'O+',
        'Bangladesh'
    ),
    (
        'Tariq',
        'Mahmud',
        21,
        'B',
        'Law',
        'tariq.mahmud@example.com',
        '2022-02-09',
        'A+',
        'Bangladesh'
    ),
    (
        'Jessica',
        'Lee',
        22,
        'A-',
        'Psychology',
        'jessica.lee@example.com',
        '2021-07-15',
        'B+',
        'USA'
    );

SELECT * FROM students;

-- SELECT * FROM students WHERE first_name = 'John';