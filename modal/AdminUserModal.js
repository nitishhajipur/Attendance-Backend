const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const adminData = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
    trim:true,
    lowercase:true,
    unique:true
  },
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
  password: {
    required: true,
    type: String,
    // minLength:8,
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
  // timestamps:true
});
const adminUser = mongoose.model("adminData", adminData);

module.exports = adminUser;
