const express = require("express");

const router = express.Router();

const {

  getTasks,

  createTask,

  updateTask,

  deleteTask,

} = require("../controllers/taskController");

const authMiddleware =
require("../middlewares/authMiddleware");

// GET TASKS
router.get(
  "/",
  authMiddleware,
  getTasks
);

// CREATE TASK
router.post(
  "/",
  authMiddleware,
  createTask
);

// UPDATE TASK
router.put(
  "/:id",
  authMiddleware,
  updateTask
);

// DELETE TASK
router.delete(
  "/:id",
  authMiddleware,
  deleteTask
);

module.exports = router;