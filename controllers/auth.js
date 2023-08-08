const User = require("../models/user");

exports.getDoctor = async (req, res, next) => {
  try {
    const address = req.params.id;

    const user = await User.findOne({ address: address });

    if (user) {
      return res.status(200).json({
        message: "exist",
        isDoctor: user.isDoctor,
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
    const { address, isDoctor } = req.body;

    const user = await User.findOne({ address: address });

    if (user) {
      return res.status(200).json({
        message: "success",
        isDoctor: user.isDoctor,
      });
    }
    
    const newUser = await User.create({ address: address, isDoctor: isDoctor });

    return res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
  }
};
