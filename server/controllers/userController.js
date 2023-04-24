const bcrypt = require("bcrypt");

const { UserModel } = require("../models/User.model");

const createUser = (req, res, next) => {
  const { password, username, email } = req.body;
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        return res.send({ message: "Signup failed, Please try again" });
      }
      const newUser = new UserModel({
        username: username,
        email: email,
        password: hash,
      });
      await newUser.save();
      res.status(200).json({
        success: true,
        user: newUser,
        message: "user saved successfully",
      });
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
