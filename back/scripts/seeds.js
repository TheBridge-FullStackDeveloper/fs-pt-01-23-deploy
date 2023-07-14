const db = require("../configs/db");
const faker = require("@faker-js/faker");
const slonik = require("slonik");

const seed = async () => {
  const pool = await db;
  const books = [];

  for (let i = 0; i < 100; i++) {
    books.push({
      title: faker.lorem.words(3),
    });
  }

  const query = slonik.sql`
    INSERT INTO books (title)
    SELECT * FROM ${slonik.sql.unnest(books, ["title"])}
  `;
  await pool.query(query);
};
