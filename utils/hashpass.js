let bcrypt = require("bcrypt");

let saltRound = 10;
let hashPassword = (password) => {
  return bcrypt.hashSync(password, saltRound);
};

let hashMatches = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashMatches, hashPassword };
