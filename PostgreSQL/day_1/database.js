const { Pool } = require("pg");

// PostgreSQL config
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "admin123",
  port: 5432,
});

// Optional: test connection
pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error connecting to the database:", err);
  }
  console.log("Connected to PostgreSQL DB!");
  release();
});

module.exports = pool;
