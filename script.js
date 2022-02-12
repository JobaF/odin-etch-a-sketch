const board = document.querySelector('.board')

const initBoard = (gridCount = 16) => {
  for (let i = 0; i < gridCount; i++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row-' + i)
    board.appendChild(row)
    for (let j = 0; j < gridCount; j++) {
      const rowElement = document.createElement('div')
      rowElement.setAttribute('class', 'row-' + i + '-element-' + j)
      row.appendChild(rowElement)
    }
  }
}

initBoard()
