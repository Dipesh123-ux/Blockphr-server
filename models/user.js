const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name : { 
    type : String,
},
address: {
    type: String,
 },
 isDoctor : {
    type : Boolean,
    default : false
 }
});

module.exports = mongoose.model("User", userSchema)