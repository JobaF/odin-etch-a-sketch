const board = document.querySelector('.board')
const inputField = document.querySelector('.input')
const createGridButton = document.querySelector('.create-grid-button')

const boardWidth = 800
let inputValue
const colorModes = ['black', 'randomRGB']
let activeColorMode = colorModes[1]

const initBoard = (gridCount = 16) => {
  const elementWidth = Math.round((boardWidth / gridCount) * 1000) / 1000

  for (let i = 0; i < gridCount; i++) {
    const row = document.createElement('div')
    row.classList.add('row-' + i)
    row.style.width = boardWidth + 'px'
    row.style.height = elementWidth + 'px'
    row.style.display = 'flex'

    board.appendChild(row)
    for (let j = 0; j < gridCount; j++) {
      const rowElement = document.createElement('div')
      rowElement.classList.add('clickElement', 'row-' + i + '-element-' + j)
      rowElement.style.width = elementWidth + 'px'
      rowElement.style.height = elementWidth + 'px'
      row.appendChild(rowElement)
    }
  }
}

const getAllBoardElements = () => {
  return document.querySelectorAll('.clickElement')
}

const handleMouseHover = () => {
  const allElements = getAllBoardElements()

  allElements.forEach((divElement) => {
    divElement.addEventListener('mouseover', () => {
      if (activeColorMode === colorModes[0]) {
        divElement.style.backgroundColor = 'black'
      } else if (activeColorMode === colorModes[1]) {
        const random = [
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        ]
        const colorString = `rgb(${random[0]},${random[1]},${random[2]})`
        divElement.style.backgroundColor = colorString
      }
    })
  })
}

const resetBoardColor = () => {
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
  if (inputValue === '') {
    createGridButton.innerHTML = 'Create Grid'
  } else if (inputValue > 0 && inputValue <= 100) {
    createGridButton.innerHTML = inputValue + ' x ' + inputValue
  } else {
    createGridButton.innerHTML = 'Create Grid'
  }
}

const onInputChange = () => {
  inputField.addEventListener('input', (e) => {
    updateInputValue(e.target.value)
    updateGridButton()
    updateInputFieldBackground()
  })
}

const resetBoard = () => {
  board.innerHTML = ''
}

const handleCreateGridClick = () => {
  if (inputValue >= 0 && inputValue <= 100) {
    resetBoard()
  }
}

const createGrid = () => {
  if (inputValue > 0 && inputValue <= 100) {
    resetBoard()
    initBoard(inputValue)
    handleMouseHover()
    inputField.value = ''
    createGridButton.innerHTML = 'Create Grid'
  }
}

onInputChange()
initBoard()
handleMouseHover()
