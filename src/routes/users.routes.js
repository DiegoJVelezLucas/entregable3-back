const { Router } = require("express");

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require("../controllers/users.controllers");
//instancias del router
const router = Router();
router.get("/users", getAllUsers);

router.get("/user/:id", getUserById);

router.post("/usercreate", createUser);

router.put("/update-user/:id", updateUserById);

router.delete("/delete-task/:id", deleteUserById);


module.exports = router;