const express = require("express");
const app = express();
const path = require("path");
const egereef = require("./routes/egereef");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local");
const session = require("express-session");
let local_strategy = require("./utils/local-validation");
const flash = require("flash");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Egereef");
  console.log("connected to database...");
}

app.use(
  session({
    secret: "deneme",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 216000 * 24 * 56,
    },
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});

// routes
app.use("/", egereef);
app.use("/", userRoute);

app.use((err, req, res, next) => {
  const { status = 500, message = "something went wrong!!!" } = err;
  res.status(status).send(message);
  next();
});

app.listen(3000, () => {
  console.log("listening to the server...");
});
