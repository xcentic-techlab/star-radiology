const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  page: String,        
  section: String,     
  key: String,         
  url: String,
  public_id: String,
});

module.exports = mongoose.model("Image", imageSchema);
