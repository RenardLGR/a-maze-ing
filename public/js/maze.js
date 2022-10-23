const cells = document.querySelectorAll('.cell')
let cellsArray = Array.from(cells)
cellsArray.forEach(c => {
    c.addEventListener('click', toggleWall)
})

const saveButton = document.querySelector('#save-maze')
saveButton.addEventListener('click', saveMaze)

function toggleWall(event){
    const cellId = event.target.id
    const cell = cellsArray.find(c => c.id === cellId)
    cell.classList.toggle('wall')
    
}


//SAVE A BOARD
async function saveMaze(){
    //Save the board as a string : first 3 chars are the size, following by the value of the cell, top to buttom, left to right
    // medium size is 14x14
    
    let size = document.querySelector('table').dataset.size
    let cellValues = cellsArray.map(c => c.classList.contains('wall') ? 'w' : '0')

    let boardValue = size + cellValues.join('')

    try{
        const newBoard = await fetch('/maze/addMaze', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'boardSize': size,
                'boardValues': boardValue
            })
        })
        const data = await newBoard.json()
        console.log(data)

        location.reload()
    }catch(err){
        console.log(err)
    }
}