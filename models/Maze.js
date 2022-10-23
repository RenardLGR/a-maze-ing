const mongoose = require("mongoose");

const MazeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  size: {
    type: String,
    required: true
  },
  value: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Maze", MazeSchema);