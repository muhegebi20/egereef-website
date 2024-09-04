const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const { isValidated } = require("../middleware");
const { validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt");
const { hashPassword } = require("../utils/hashpass");
const passport = require("passport");

router.get("/register", (req, res) => {
  res.render("user/register");
});
router.post("/register", isValidated, async (req, res, next) => {
  let result = validationResult(req);
  if (!result.isEmpty()) return res.send({ error: result.array() });
  let data = matchedData(req);
  data.password = hashPassword(data.password);
  let user = new User(data);
  await user.save();
  req.logIn(user, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "welcome");
    res.redirect("/");
  }
);
router.get("/login", (req, res) => {
  res.render("user/login");
});
router.get("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;
