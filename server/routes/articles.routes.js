const { Router } = require("express");
const {
  createArticle,
  allArticles,
  updateArticles,
  deleteArticles,
} = require("../controllers/articleController");

const articlesRouter = Router();

// Create Article
articlesRouter.post("/create", createArticle);

// All Articles
articlesRouter.get("/", allArticles);

// Update Articles
articlesRouter.put("/:id", updateArticles);

//Delete Articles
articlesRouter.delete("/:id", deleteArticles);
module.exports = {
  articlesRouter,
};
