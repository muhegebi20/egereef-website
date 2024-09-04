let bcrypt = require("bcrypt");

let saltRound = 10;
module.exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, saltRound);
};

module.exports.hashMatches = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
