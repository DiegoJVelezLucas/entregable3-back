const { Router } = require("express");

const {
  getAllTask,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
} = require("../controllers/tasks.controllers");

// creamos una instancia del router
const router = Router();
router.get("/tasks", getAllTask);

router.get("/tasks/:id", getTaskById);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTaskById);

router.delete("/tasks/:id", deleteTaskById);

module.exports = router;


