const { Router } = require("express");

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/category.controllers");

//instances to router
const router = Router();
router.get("/allcategories", getAllCategories);

router.get("/category/:id", getCategoryById);

router.post("/create-category", createCategory);

router.put("/update-category/:id", updateCategoryById);

router.delete("/remove-category/:id", deleteCategoryById);
