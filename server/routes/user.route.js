const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("User page");
});

module.exports = {
  userRouter,
};
