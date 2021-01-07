const bcrypt = require("bcryptjs");

const comparePassword = (pass, hashPass) => {
  return bcrypt.compareSync(pass, hashPass);
};

module.exports = comparePassword;
