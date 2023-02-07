const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  const hashPwd = await bcrypt.hash(password, 10);
  return hashPwd;
};

const decryptPassword = async (plainPassword, hashPassword) => {
  let result = await bcrypt.compare(plainPassword, hashPassword);
  return result; //returns boolean
};

module.exports = {
  encryptPassword,
  decryptPassword,
};
