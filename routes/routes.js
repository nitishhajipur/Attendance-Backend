const express = require("express");
const router = express.Router();

const {
  validateUser,
  createUser,
  getAllUserDetails,
  updateUserById,
  findUserById,
  deleteUserById,
} = require("../controller/userController");
// const {AddStudent,findStudentById, getAllStudentDetails, updateStudentById, filterStudentByName} = require('../controler/stundetControler')

router.post("/validateUser", validateUser);

// API for create User
/**
 * @swagger
 * /createUser:
 *   post:
 *     summary: Create User.
 *     description: Create User.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.post("/createUser", createUser);

// find all user API
/**
 * @swagger
 * /getAllUserDetails:
 *   get:
 *     summary: Get all users details.
 *     description: Get all users details.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/getAllUserDetails", getAllUserDetails);

// find user by user id API
/**
 * @swagger
 * /findUserById:
 *   get:
 *     summary: Find User by userId.
 *     description: Find User by userId.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.get("/findUserById/:id", findUserById);

//Update by ID Method
/**
 * @swagger
 * /update:
 *   patch:
 *     summary: Update User by userId.
 *     description: Update User by userId.
 *     parameters:
 *       - in: path
 *         name: organizationName
 *         required: true
 *         description: Organization Name you have to user.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The user's name.
 *                         example: Leanne Graham
 */
router.patch("/updateUserById/:id", updateUserById);

//Delete user by Id

router.delete("/deleteUserById/:id", deleteUserById);

module.exports = router;
