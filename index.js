const express = require("express");
const app = express();
const path = require("path");
const egereef = require("./routes/egereef");
const userRoute = require("./routes/user");
const mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "images")));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Egereef");
  console.log("connected to database...");
}

// routes
app.use("/", egereef);
app.use("/", userRoute);

app.listen(3000, () => {
  console.log("listening to the server...");
});
