const express = require("express");
const router = express.Router({ mergeParams: true });
const Project = require("../model/project");
const { checkPost } = require("../middleware");
const { validationResult, matchedData } = require("express-validator");
const AppError = require("../AppError");
const CatchAsync = require("../utils/CatchAsync");

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
router.post(
  "/projects",
  checkPost,
  CatchAsync(async (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) return res.send({ error: error.array() });
    let post = matchedData(req);
    let project = new Project(post);
    await project.save();
    res.redirect(`/projects/${project._id}`);
  })
);
router.get("/allProjects", async (req, res) => {
  let projects = await Project.find({});
  res.render("app/allProjects", { projects });
});
router.get(
  "/projects/:id/edit",
  CatchAsync(async (req, res) => {
    const { id } = req.params;
    let project = await Project.findById(id);
    if (!project) throw new AppError(404, "Project not found");
    res.render("app/edit", { project });
  })
);

router.get(
  "/projects/:id",
  CatchAsync(async (req, res) => {
    let { id } = req.params;
    let project = await Project.findById(id);
    if (!project) {
      throw new AppError(404, "<h1>404\nProject not found!</h1>");
    }
    res.render("app/details", { project });
  })
);

router.put(
  "/projects/:id/",
  checkPost,
  CatchAsync(async (req, res) => {
    let { id } = req.params;
    let error = validationResult(req);
    if (!error.isEmpty()) return res.send({ error: error.array() });
    let post = matchedData(req);
    let project = await Project.findOneAndUpdate({ _id: id }, post);
    res.redirect(`/projects/${project._id}`);
  })
);

router.delete(
  "/projects/:id",
  CatchAsync(async (req, res) => {
    let { id } = req.params;
    await Project.findByIdAndDelete(id);
    res.redirect("/");
  })
);

module.exports = router;
