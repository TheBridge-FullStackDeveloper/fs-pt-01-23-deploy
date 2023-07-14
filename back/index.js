const express = require("express");
const app = express();
const port = 3000;
const db = require("./configs/db");
const slonik = require("slonik");
const cors = require("cors");
const options = require("./configs/cors");

app.use(cors(options));

app.get("/", async (req, res) => {
  const pool = await db;
  const response = await pool.query(slonik.sql.unsafe`SELECT * FROM book`);

  res.status(200).json({
    ok: true,
    data: response.rows,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
