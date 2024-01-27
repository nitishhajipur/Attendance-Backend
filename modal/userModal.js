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
    required: false,
    type: String,
    unique: true,
  },
  contactNo: {
    required: true,
    type: Number,
    unique: true,
  },
  employeeId: {
    required: false,
    type: String,
    unique: true,
  },
  hourlyPay: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  department: {
    required: true,
    type: String,
  },
  shift: {
    required: true,
    type: String,
  },
  attendanceAction: {
    required: true,
    type: String,
  },
});
const user = mongoose.model("userData", userData);

module.exports = user;
