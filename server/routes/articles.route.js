const { Router } = require("express");

const articlesRouter = Router();

articlesRouter.get("/", (req, res) => {
  res.send("Articles page");
});

module.exports = {
    articlesRouter,
};
