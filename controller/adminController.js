const adminData = require('../modal/AdminUserModal')

const RegisterAdmin =async (req,res)=>{
    try {
        console.log('32..',req)
        await adminData.create({ ...req.body });
        res.status(200).json({
          message: "User create successfully.use user id for login",
          status: "success",
        });
      } catch (error) {
        console.log(error,"13.....")
        if (error.code === 11000) {
          let response ={status:"error",message: `Admin with given ${Object.keys(error?.keyValue)[0]} already registered `}
          
          res.status(200).json(
            response
          );
        } else {
          res.status(500).json({ message: error.message });
        }
      }
}
const validateAdmin = async (req, res) => {
    const request = req.body;
    try {
      const data = await adminData.find({
        userName: request.userName,
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
          errorCode: 400,
          status: "error",
          message: "Wrong User name or password",
        });
      }
    } catch (error) {
      res.send(500).json({ message: error.message });
    }
  };

  const findAdminById = async (req, res) => {
    const _id = req.params.id;
    try {
      const data = await adminData.findById(_id);
      delete data.password;
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports={
    RegisterAdmin,
    validateAdmin,
    findAdminById
}