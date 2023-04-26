const { Router } = require("express");
const {
  createCategory,
  getCategories,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

const categoryRouter = Router();

// Get all categories
categoryRouter.get("/", getCategories);

// Create category
categoryRouter.post("/create", createCategory);

// Delete category
categoryRouter.delete("/delete/:id", deleteCategory);

// update category
categoryRouter.put("/update/:id", updateCategory);
module.exports = {
  categoryRouter,
};
