const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/egereef");
});
router.get("/egereef", (req, res) => {
  res.render("app/home");
});
router.get("/about", (req, res) => {
  res.render("app/about");
});
router.get("/projects", (req, res) => {
  res.render("app/projects");
});
router.get("/contact", (req, res) => {
  res.render("app/contact");
});
router.get("/fundme", (req, res) => {
  res.render("app/fundme");
});
router.get("/postproject", (req, res) => {
  res.render("app/postProject");
});
router.get("/projects/:id", (req, res) => {
  res.render("app/details");
});
router.get("/allProjects", (req, res) => {
  res.render("app/allProjects");
});

module.exports = router;
