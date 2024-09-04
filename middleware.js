const { checkSchema } = require("express-validator");
module.exports.isValidated = checkSchema({
  name: {
    trim: true,
    notEmpty: {
      errorMessage: "Username cannot be empty",
    },
  },
  email: {
    trim: true,
    isEmail: {
      errorMessage: "invalid email address",
    },
    notEmpty: {
      errorMessage: "email cannot be empty",
    },
  },
  password: {
    trim: true,
    isLength: {
      options: { min: 8 },
      errorMessage: "Password must be at least 8 characters",
    },
  },
});

// module.exports.isLoggedIn = (req, res, next) => {
//   if (!req.isAuthenticated()) {
//     req.flash("error", "you must login first");
//     res.redirect("/login");
//   }
//   next();
// };
