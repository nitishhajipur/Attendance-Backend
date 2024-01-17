const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminUserData = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
    trim:true,
    lowercase:true
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
    unique: true,
    lowercase:true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  contactNo: {
    required: true,
    type: Number,
    unique: true,
  },
  employeeId:{
    required:false,
    type:String,
    unique:true
  },
  password: {
    required: true,
    type: String,
    minLength:8,
    trim:true,
    validate(value){
      if(value.toLowerCase().includes('password')){
        throw new Error("Password can't contain password")
      }
    }
  },
  token:[{
    token:{
      type:String,
      required:false
    }
  }],
  timestamps:true
});
const adminuser = mongoose.model("adminuser", adminUserData);

module.exports = adminuser;
