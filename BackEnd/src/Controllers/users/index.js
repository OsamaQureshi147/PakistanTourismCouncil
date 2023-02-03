const Users = require("../../Models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

const addNewUser = async (req, res) => {
  const { name, email, password, bio, role, contact, createdAt, profilepic } =
    req.body;

  try {
    let user = new Users({
      name,
      email,
      password,
      bio,
      role,
      contact,
      profilepic,
      createdAt,
    });
    await user.save();
    res.status(200).send("User added!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllUsers,
  addNewUser,
};
