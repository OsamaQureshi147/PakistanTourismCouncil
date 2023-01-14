const { getAllEventsQuery } = require("./queries");
const pool = require("../../databasepg");

const getallEvents = (req, res) => {
  pool.query(getAllEventsQuery, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};
module.exports = { getallEvents };
