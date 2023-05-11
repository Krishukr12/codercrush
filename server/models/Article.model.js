const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  body: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
    required: true,
  },
});

const ArticleModel = mongoose.model("article", articleSchema);
module.exports = {
  ArticleModel,
};
