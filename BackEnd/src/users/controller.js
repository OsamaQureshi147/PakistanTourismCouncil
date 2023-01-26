const { getAllUsersQuery, getSignUpUserQuery } = require("./queries");

const pool = require("../../databasepg");

const getAllUsers = (req, res) => {
  pool.query(getAllUsersQuery, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const signUpUser = (req, res) => {
  const { name, email, password } = req.body;
  pool.query(getSignUpUserQuery({ name, email, password }), (err, results) => {
    if (err) res.status(500).send(`error occured while signing up:- ${err}`);
    res.status(200).json(results);
  });
};

module.exports = { getAllUsers, signUpUser };
