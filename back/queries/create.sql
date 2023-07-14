CREATE TABLE IF NOT EXISTS book (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  year INTEGER NOT NULL
);

INSERT INTO book (
  title,
  author,
  year
) VALUES (
  'The Hobbit',
  'J. R. R. Tolkien',
  1937
),
(
  'The Fellowship of the Ring',
  'J. R. R. Tolkien',
  1954
),
(
  'The Two Towers',
  'J. R. R. Tolkien',
  1954
),
(
  'The Return of the King',
  'J. R. R. Tolkien',
  1955
);
