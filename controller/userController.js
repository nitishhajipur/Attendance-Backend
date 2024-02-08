
const userData = require("../modal/userModal");

const validateUser = async (req, res) => {
  const request = req.body;
  try {
    const data = await userData.find({
      email: request.userName,
      password: request.password,
    });
    if (data.length > 0) {
      const _data = data.map((item) => {
        delete item.password;
        return item;
      });
      res.send({ id: data[0]._id });
    } else {
      res.send({
        errorCode: 200,
        status: "error",
        message: "Wrong User Id or password",
      });
    }
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
   
    console.log('32..',req)
    await userData.create({ ...req.body });

    res.status(200).json({
      message: "User create successfully.use email id for login",
      status: "success",
    });
  } catch (error) {
    if (error.code === 11000) {
      let response ={status:"error",message: `User with given ${Object.keys(error?.keyValue)[0]} already registered `}
      res.status(200).json(
        response
      );
    } else {
      res.status(500).json({ message: error.message });
    }
  }
};

const getAllUserDetails = async (req, res) => {
  try {
    const data = await userData.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const options = { new: true }; // this true or false will specify that whether we want to return a new data in body or not.
    const data = await userData.findByIdAndUpdate(id, updatedUserData, options);

    res.send({status:"success",message:"User Updated Successfully"});
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
};

const findUserById = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await userData.findById(_id);
    delete data.password;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await userData.findByIdAndDelete(id);
    res.send({status:"success",message:"User successfully delete"});
  } catch (error) {
    res.send(400).json({ message: error.message });
  }
};

module.exports = {
//   registerOrganization,
  validateUser,
  createUser,
  getAllUserDetails,
  updateUserById,
  findUserById,
  deleteUserById
};
