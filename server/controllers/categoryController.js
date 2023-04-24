const { CategoryModel } = require("../models/Category.model");

//Create new category
const createCategory = async (req, res, next) => {
  try {
    const newCategory = new CategoryModel(req.body);
    await newCategory.save();
    res.status(200).send({
      status: "success",
      category: newCategory,
    });
  } catch (error) {
    next(error);
  }
};

// Get all categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await CategoryModel.find({});
    res.status(200).send({
      status: "success",
      categories: categories,
      count: categories.length,
    });
  } catch (error) {
    next(error);
  }
};

// Delete categories

const deleteCategory = async (req, res, next) => {
  const ID = req.params.id;
  try {
    await CategoryModel.findByIdAndDelete({ _id: ID });
    res
      .status(200)
      .send({ status: "success", message: "Category has been deleted" });
  } catch (error) {
    next(error);
  }
};

// Update Category

const updateCategory = async (req, res, next) => {
  const ID = req.params.id;
  const updatedData = req.body;
  try {
    const newCategory = await CategoryModel.findByIdAndUpdate(
      { _id: ID },
      { $set: updatedData },
      { new: true }
    );
    res.status(200).send({ status: "success", category: newCategory });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
};
