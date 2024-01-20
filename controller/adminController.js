const adminUser = require('../modal/AdminUserModal')

const RegisterAdmin =async (req,res)=>{
    try {
        console.log('32..',req)
        await adminUser.create({ ...req.body });
        res.status(200).json({
          message: "User create successfully.use user id for login",
          status: "success",
        });
      } catch (error) {
        if (error.code === 11000) {
          res.status(200).json({
            status: "error",
            message:
              "User name already exists",
          });
        } else {
          res.status(500).json({ message: error.message });
        }
      }
}
const validateUser = async (req, res) => {
    const request = req.body;
    try {
      const data = await adminUser.find({
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
      const data = await adminUser.findById(_id);
      delete data.password;
      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports={
    RegisterAdmin,
    validateUser,
    findAdminById
}