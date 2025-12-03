CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE manga (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    description TEXT
);
