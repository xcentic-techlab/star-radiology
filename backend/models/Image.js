const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  page: String,        // landingpage | services
  section: String,     // banner | radiology | mri | ctscan | ultrasound ...
  key: String,         // HeroImage | Machine1 ...
  url: String,
  public_id: String,
});

module.exports = mongoose.model("Image", imageSchema);
