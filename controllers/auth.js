const User = require("../models/user");

exports.getDoctor = async (req, res, next) => {
  try {
    const address = req.params.id;

    const user = await User.findOne({ address: address });

    if (user) {
      return res.status(200).json({
        message: "exist",
        isDoctor: user.isDoctor,
        user: user,
      });
    }

    return res.status(200).json({
      message: "not exist",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.postDoctor = async (req, res, next) => {
  try {
   
    const { address, isDoctor, name } = req.body;

    const user = await User.findOne({ address: address });

    if (user) {
      return res.status(200).json({
        message: "success",
        isDoctor: user.isDoctor,
        user: user,
      });
    }

    const newUser = await User.create({
      address: address,
      isDoctor: isDoctor,
      name: name,
    });

    return res.status(200).json({
      message: "success",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.addDoctorsDetails = async (req, res) => {
  try {
    console.log(req.body);
    const { address, name ,aadharNumber,gender} = req.body;

    const user = await User.findOne({ address: address, isDoctor : true });

    if (user) {
      return res.status(200).json({
        message: "success",
        isDoctor: user.isDoctor,
        user: user,
      });
    }

    const newUser = await User.create({
      address: address,
      isDoctor: true,
      name: name,
      aadharNumber,
      gender
    });

    return res.status(200).json({
      message: "success",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
  }
};
