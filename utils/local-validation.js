let passport = require("passport");
let { Strategy } = require("passport-local");
let Users = require("../model/userModel");
const { hashMatches } = require("./hashpass");

passport.serializeUser((user, done) => {
  return done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
  let foundUser = await Users.findById(id);
  done(null, foundUser);
});

passport.use(
  new Strategy({ usernameField: "email" }, async (email, password, done) => {
    try {
      let foundUser = await Users.findOne({ email: email });
      if (!foundUser)
        return done(null, false, { message: "invalid email address" });
      if (!hashMatches(password, foundUser.password))
        return done(null, false, { message: "invalid password" });
      done(null, foundUser);
    } catch (error) {
      done(error, null);
    }
  })
);

module.exports = passport;
