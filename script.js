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

const updateInputValue = (value) => {
  if (!isNaN(value)) {
    inputValue = value
  } else inputValue = ''
}

const updateInputFieldBackground = () => {
  const inputField = document.querySelector('.input')

  if (inputValue > 100) {
    inputField.style.backgroundColor = 'red'
  } else inputField.style.backgroundColor = 'rgb(160, 159, 159)'
}

const updateGridButton = () => {
  const createGridButton = document.querySelector('.create-grid-button')

  if (inputValue === '') {
    createGridButton.innerHTML = 'Create Grid'
  } else if (inputValue >= 0 && inputValue <= 100) {
    createGridButton.innerHTML = inputValue + ' x ' + inputValue
  } else {
    createGridButton.innerHTML = 'Create Grid'
  }
}

const addEventListenerToInput = () => {
  const inputField = document.querySelector('.input')
  inputField.addEventListener('input', (e) => {
    updateInputValue(e.target.value)
    updateGridButton()
    updateInputFieldBackground()
  })
}

addEventListenerToInput()
initBoard()
addClickListeners()
