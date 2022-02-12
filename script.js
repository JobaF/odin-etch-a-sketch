const board = document.querySelector('.board')

const boardWidth = 800
let inputValue

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

const getAllBoardElements = () => {
  return document.querySelectorAll('.clickElement')
}

const addClickListeners = () => {
  const allElements = getAllBoardElements()

  allElements.forEach((button) => {
    button.addEventListener('mouseover', () => {
      button.style.backgroundColor = 'black'
    })
  })
}

const resetBoard = () => {
  const allElements = getAllBoardElements()

  allElements.forEach((button) => {
    button.style.backgroundColor = 'white'
  })
}

const updateValue = (val) => {
  console.log(val)
}
const addEventListenerToInput = () => {
  const inputField = document.querySelector('.input')
  inputField.addEventListener('input', (e) => {
    inputValue = e.target.value
    if (
      parseInt(inputValue) >= 100 ||
      parseInt(inputValue) <= 0 ||
      isNaN(inputValue)
    ) {
      inputField.style.backgroundColor = 'red'
    } else {
      inputField.style.backgroundColor = 'white'
    }
  })
}

addEventListenerToInput()
initBoard()
addClickListeners()
