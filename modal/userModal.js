const mongoose = require("mongoose");

const userData = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  contactNo: {
    required: true,
    type: Number,
    unique: true,
  },
  employeeId:{
    required:true,
    type:String,
    unique:true
  },
  hourlyRate:{
    required:true,
    type:String
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
});
const user = mongoose.model("userData", userData);

module.exports = user;
