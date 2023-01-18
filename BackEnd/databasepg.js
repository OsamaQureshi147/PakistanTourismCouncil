const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "pakistantourism",
});

module.exports = pool;
