const boardArea = document.querySelector('.container-rows')
const keyboardArea = document.querySelector('.container-keyboard')

let currentRow = 0
let currentTile = 0
let rowFilled = false

// CRIANDO TABULEIRO

const guessRows = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
]


for(let i = 0; i < guessRows.length; i++){
    const individualRow = document.createElement('div')
    individualRow.setAttribute('id', 'guessRow-' + i)
    
    for(let indice = 0; indice < 5; indice++){
        const individualTile = document.createElement('div')
        individualTile.setAttribute('id', 'guessRow-' + i + '-tile-' + indice)
        individualRow.append(individualTile) 
    }

    boardArea.append(individualRow)
}




// CRIANDO TECLADO
const keys = [
    'Q','W','E','R','T','Y','U','I','O','P',
    'A','S','D','F','G','H','J','K','L',
    'ENTER','Z','X','C','V','B','N','M', '⌫'
]


function inputText(key) {
    if(key == '⌫'){
        const square = document.getElementById(`guessRow-${currentRow}-tile-${currentTile}`)
        square.textContent = ''
        rowFilled = false

        if(currentTile != 0) {
            currentTile--
        }
        return
    }
    
    if(key == 'ENTER') {
        if(rowFilled){
            console.log('enterzão')
        }
        
        return
    }

    if(rowFilled){

    } else {
        const square = document.getElementById(`guessRow-${currentRow}-tile-${currentTile}`)
        square.textContent = key
        if(currentTile == 4) {
            rowFilled = true
        } else {
            currentTile++
        }
    }
}

function pressKey(key) {
    inputText(key)
}


for(let i = 0; i < keys.length; i++){
    const individualKey = document.createElement('button')
    individualKey.textContent = keys[i]
    individualKey.setAttribute('id', keys[i])
    individualKey.setAttribute('onclick', 'pressKey();')
    individualKey.onclick = function() {pressKey(keys[i]);};
    keyboardArea.append(individualKey)
}

