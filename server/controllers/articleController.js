const { ArticleModel } = require("../models/Article.model");

// CREATE A NEW ARTICLE
const createArticle = async (req, res, next) => {
  try {
    const newArticle = new ArticleModel(req.body);
    await newArticle.save();
    res.status(200).send({
      success: true,
      newArticle,
    });
  } catch (error) {
    next(error);
  }
};

//All ARTICLES
const allArticles = async (req, res, next) => {
  try {
    const allArticles = await ArticleModel.find();
    res.status(200).send({
      success: true,
      allArticles,
    });
  } catch (error) {
    next(error);
  }
};
// Updates Articles
const updateArticles = async (req, res, next) => {
  try {
    const updatedData = req.body;
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      { $set: updatedData },
      { new: true }
    );
    res.status(200).send({
      success: true,
      updatedArticle,
    });
  } catch (error) {
    next(error);
  }
};
// Deletes Articles
const deleteArticles = async (req, res, next) => {
  try {
    await ArticleModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).send({
      success: true,
      message: "Article deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
// Exported functions
module.exports = {
  createArticle,
  allArticles,
  updateArticles,
  deleteArticles,
};
