const { Client } = require("pg");

// const client = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   passw0rd: "123456",
//   database: "pakistantourism",
// });
const client = new Client({
  host: "gz76dp1bqf.sqv6582auz.tsdb.cloud.timescale.com",
  user: "tsdbadmin",
  port: 37327,
  password: "Fp@nD9Z@tQNKgw3",
  database: "tsdb",
});

client.connect();

client.query("Select * from conditions", (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
});
