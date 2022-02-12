const board = document.querySelector('.board')

const boardWidth = 800

const addResetButton = () => {}

const initBoard = (gridCount = 16) => {
  const elementWidth = boardWidth / gridCount + 'px'
  for (let i = 0; i < gridCount; i++) {
    const row = document.createElement('div')
    row.classList.add('row-' + i)
    row.style.width = boardWidth + 'px'
    row.style.height = elementWidth
    board.appendChild(row)
    for (let j = 0; j < gridCount; j++) {
      const rowElement = document.createElement('div')
      rowElement.classList.add('clickElement', 'row-' + i + '-element-' + j)
      rowElement.style.width = elementWidth
      rowElement.style.height = elementWidth
      rowElement.style.display = 'inline-block'
      row.appendChild(rowElement)
    }
  }
}

const addClickListeners = () => {
  const allButtons = document.querySelectorAll('.clickElement')

  allButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'black'
    })
  })
}

initBoard()
addClickListeners()
