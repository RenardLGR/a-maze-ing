const express = require("express");
const router = express.Router();
const mazeController = require("../controllers/maze");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Maze Routes - simplified for now
router.get("/newmaze", ensureAuth, mazeController.getMaze);

router.post("/addMaze", ensureAuth, mazeController.addMaze)

module.exports = router;