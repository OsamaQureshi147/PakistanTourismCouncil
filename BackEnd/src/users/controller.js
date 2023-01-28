const {
  getAllUsersQuery,
  getSignUpUserQuery,
  getUserByEmailQuery,
} = require("./queries");

const pool = require("../../databasepg");
const { encryptPassword } = require("../../utils/helpers");

const getAllUsers = (req, res) => {
  pool.query(getAllUsersQuery, (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  });
};

const signUpUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await encryptPassword(password);
  try {
    const existingUsers = await pool.query(getUserByEmailQuery, [email]);
    if (existingUsers.rows.length) {
      return res.status(400).send("User already exists!");
    } else {
      const addUserResponse = await pool.query(getSignUpUserQuery, [
        name,
        email,
        hashedPassword,
      ]);
      return res.status(200).send(addUserResponse.rows);
    }
  } catch (err) {
    console.error("Error while adding user", err);
  }
};

module.exports = { getAllUsers, signUpUser };
