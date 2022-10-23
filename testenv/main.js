function createBoard(nRow, nCol){
    // const tbody = document.querySelector('.board').childNodes[1].childNodes[0]
    const tbody = document.querySelector('tbody')

    for(let i=0 ; i<nRow ; i++){
        let row = tbody.insertRow(i)
        row.classList.add(`row`)
        row.classList.add(`${i}`)
        for(let j=0 ; j<nCol ; j++){
            let cell = row.insertCell(j)
            cell.classList.add(`cell`)
            cell.classList.add(`${i}-${j}`)
            cell.setAttribute('id', `${i}-${j}`)
            // cell.innerHTML = 'x'
        }
    }
}

createBoard(10,10)

const cells = document.querySelectorAll('.cell')
let cellsArray = Array.from(cells)
cellsArray.forEach(c => {
    c.addEventListener('click', toggleWall)
})

function toggleWall(event){
    const cellId = event.target.id
    const cell = cellsArray.find(c => c.id === cellId)
    cell.classList.toggle('wall')
    
}