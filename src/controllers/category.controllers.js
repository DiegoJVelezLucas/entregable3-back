const Categories = require("../models/category.model");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll({});
    res.json(categories);
  } catch (error) {
    res.status(400).json(error);
  }
};
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoryId = await Categories.findByPk(id);
    res.json(categoryId);
  } catch (error) {
    res.status(400).json(error);
  }
};
const createCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    await Categories.create(newCategory);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const category = await Categories.update(
      { title },
      { where: { id } }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    await Categories.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategoryById,
  deleteCategoryById,
};
