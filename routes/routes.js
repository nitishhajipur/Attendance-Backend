const express = require("express");
const router = express.Router();

const {
  // validateUser,
  createUser,
  getAllUserDetails,
  updateUserById,
  // findUserById,
  deleteUserById,
} = require("../controller/userController");

const {
  validateUser,
  RegisterAdmin,
  findAdminById,
} = require("../controller/adminController");

router.post("/validateUser", validateUser);

// API for create User

router.post("/createUser", createUser);

// find all user API

router.get("/getAllUserDetails", getAllUserDetails);

// find user by user id API

router.get("/findAdminById/:id", findAdminById);

//Update by ID Method

router.patch("/updateUserById/:id", updateUserById);

//Delete user by Id

router.delete("/deleteUserById/:id", deleteUserById);

router.post("/registerAdmin", RegisterAdmin);

module.exports = router;
