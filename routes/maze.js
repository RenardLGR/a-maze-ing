const express = require("express");
const router = express.Router();
const mazeController = require("../controllers/maze");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Maze Routes - simplified for now
router.get("/newmaze", ensureAuth, mazeController.getNewMaze);
router.get("/:id", ensureAuth, mazeController.getMaze)

router.post("/addMaze", ensureAuth, mazeController.createMaze)

module.exports = router;