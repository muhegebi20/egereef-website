const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    default:
      "https://gdb.voanews.com/903edb11-3d91-4ea8-9eca-9935cdaa9a12_cx0_cy10_cw0_w408_r1_s.jpg",
  },
});

let Project = mongoose.model("Project", projectSchema);
module.exports = Project;
