const express = require("express");
const router = express.Router();

const { getTasks, createTask } = require("../utils/fakeDB");

// TODO 1: Convert this route to async/await with try/catch
router.get("/", (req, res) => {
  res.json([]);
});

// TODO 2: Implement POST /api/tasks
// - Accept { title }
// - If title missing → return 400
// - Else create task and return it

module.exports = router;
