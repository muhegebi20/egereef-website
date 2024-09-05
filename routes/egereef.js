const express = require("express");
const router = express.Router();
const Project = require("../model/project");

router.get("/", (req, res) => {
  res.redirect("/egereef");
});
router.get("/egereef", async (req, res) => {
  let projects = await Project.find({});
  res.render("app/home", { projects });
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
router.get("/projects/:id", async (req, res) => {
  let { id } = req.params;
  let project = await Project.findById(id);
  res.render("app/details", { project });
});
router.get("/allProjects", async (req, res) => {
  let projects = await Project.find({});
  res.render("app/allProjects", { projects });
});

module.exports = router;
