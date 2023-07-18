const Categories = require("../models/category.model");
const Task = require("../models/task.model");
const User = require("../models/user.model");

 User.hasMany(Task, { foreignKey: "userId" });
 Task.belongsTo(User, { foreignKey: "userId" });

 Categories.hasMany(Task, { foreignKey: "categoryId" });
 Task.belongsTo(Categories, { foreignKey: "categoryId" });

const getAllTask = async (req, res) => {

  try {
    const tasks = await Task.findAll({
       include: [
          {
            model: User,
          },
          {
            model: Categories,
          },
       ],
    });
    res.json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};
const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    await Task.create(newTask);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.update(
      { title, description, completed },
      {
        where: { id },
      }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
