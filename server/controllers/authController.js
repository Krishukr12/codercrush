const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");

// Sign Up
const createUser = (req, res, next) => {
  const { password, username, email } = req.body;
  try {
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.send({ message: "Signup failed, Please try again" });
      }

      const newUser = new UserModel({
        username: username,
        email: email,
        password: hash,
      });

      const { password, isBlocked, _id, ...otherDetails } = newUser._doc;

      await newUser.save();

      res.status(200).json({
        success: true,
        user: otherDetails,
        message: "user saved successfully",
      });
    });
  } catch (error) {
    next(error);
  }
};

// Login

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.send("user not found");

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) return res.send("Incorrect Password");

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    return res.status(200).send({
      message: "Login Successful...!",
      username: user.username,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  login,
};
