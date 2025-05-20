const express = require("express");
const app = express();
const pool = require("./database");

app.use(express.json());

// Example route
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM person");
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/users", async (req, res) => {
  try {
    const { id, name, city } = req.body;
    const result = await pool.query(
      `INSERT INTO person VALUES(${id}, '${name}','${city}')`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.put("/users/:id", async (req, res) => {
  try {
    const { name, city } = req.body;
    const { id } = req.params;
    const result = await pool.query(
      `UPDATE person SET name='${name}', city='${city}' WHERE id=${id}`
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

const PORT = 3050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
