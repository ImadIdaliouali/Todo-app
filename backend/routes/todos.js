const express = require("express");

const {
  getAllTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

// GET all todos
router.get("/", getAllTodos);

// GET a single todo
router.get("/:id", getTodo);

// POST a new todo
router.post("/", createTodo);

// DELETE a todo
router.delete("/:id", deleteTodo);

// UPDATE a todo
router.patch("/:id", updateTodo);

module.exports = router;
