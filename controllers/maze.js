const User = require("../models/User");
const Maze = require("../models/Maze");

module.exports = {
    getNewMaze: async (req, res) => {
        res.render("newmaze.ejs", {  });
    },

    getMaze: async (req, res) => {
        const mazeId = req.params.id
        try{
            const maze = await Maze.findById(mazeId);
            res.render("maze.ejs", { maze: maze, user: req.user });
        }catch(err){
            console.log(err)
        }
    },
    
    createMaze: async (req, res) => {
        const mazeSize = req.body.boardSize
        const mazeValues = req.body.boardValues
        try{
            await Maze.create({
                title: 'temptitle',
                caption: 'tempcaption',
                user: req.user.id,
                size: mazeSize,
                value:mazeValues
            });
        }catch(err){
            console.log(err)
        }
    }
}