const { Router } = require("express");

const { createUser } = require("../controllers/userController");

const userRouter = Router();


// Create User
userRouter.post("/create", createUser);

module.exports = {
  userRouter,
};
