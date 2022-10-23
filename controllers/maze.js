module.exports = {
    getMaze: async (req, res) => {
        res.render("maze.ejs", {  });
    },
    
    addMaze: async (req, res) => {
        console.log(req.body)
        console.log('maze added!')
    }
}