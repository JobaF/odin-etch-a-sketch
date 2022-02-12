const board = document.querySelector('.board')

const boardWidth = board.getBoundingClientRect().width

const initBoard = (gridCount = 16) => {
  const elementWidth = boardWidth / gridCount + 'px'
  for (let i = 0; i < gridCount; i++) {
    const row = document.createElement('div')
    row.setAttribute('class', 'row-' + i)
    row.style.width = boardWidth + 'px'
    row.style.height = elementWidth
    board.appendChild(row)
    for (let j = 0; j < gridCount; j++) {
      const rowElement = document.createElement('div')
      rowElement.setAttribute('class', 'row-' + i + '-element-' + j)
      rowElement.style.width = elementWidth
      rowElement.style.height = elementWidth
      rowElement.style.display = 'inline-block'
      rowElement.style.textAlign = 'center'
      row.appendChild(rowElement)
    }
  }
}

const addClickListeners = () => {}

initBoard()
