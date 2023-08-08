const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  address: {
    type: String,
  },
  isDoctor : {
    type : Boolean,
    default: false,
  }
  
});

module.exports = mongoose.model("User", userSchema);