const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({});
    res.json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = await User.findByPk(id);
    res.json(userId);
  } catch (error) {
    res.status(400).json(error);
  }
};
const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    await User.create(newUser);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password } = req.body;
    const user = await User.update(
      { username, email, password },
      { where: { id } }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
