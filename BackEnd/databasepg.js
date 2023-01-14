const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "123456",
  database: "pakistantourism",
});

module.exports = pool;

// pool.connect();

// client.query("Select * from conditions", (err, res) => {
//   if (!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
// });
