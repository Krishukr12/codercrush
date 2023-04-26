const { Router } = require("express");

const { createUser, login } = require("../controllers/authController");

const authRouter = Router();

// Sign UP
authRouter.post("/signup", createUser);

// Login
authRouter.post("/login", login);

module.exports = {
  authRouter,
};
