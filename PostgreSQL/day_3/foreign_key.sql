-- Active: 1747464306999@@127.0.0.1@5432@postgres

CREATE Table "user" (
    id serial PRIMARY KEY,
    username varchar(50) NOT NULL
);

CREATE Table "post" (
    id serial PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user" (id) on delete set DEFAULT DEFAULT 5
);

-- Insert users
INSERT INTO
    "user" (username)
VALUES ('alice'),
    ('bob'),
    ('charlie'),
    ('diana');

INSERT INTO "user" (username) VALUES ('anonymous');

-- Insert posts
INSERT INTO
    "post" (title, user_id)
VALUES ('First post by Alice', 1),
    (
        'Alice shares a second thought',
        1
    ),
    ('Bob’s opinion on tech', 2),
    ('Charlie’s travel diary', 3),
    ('Diana’s book review', 4),
    (
        'Another travel story from Charlie',
        3
    ),
    (
        'Diana’s recipe for lasagna',
        4
    );

DROP TABLE post;

DROP TABLE "user";

ALTER TABLE post alter column user_id SET NOT NULL;

SELECT * FROM "user";

SELECT * FROM "post";

SELECT * FROM "post" WHERE user_id = 1;

DELETE FROM "user" WHERE id = 1