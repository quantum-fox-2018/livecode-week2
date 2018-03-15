function generateAlphabetBoard(input){
    let draft = input * input
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arrBoard = []

    for(let i=0; i<draft; i++){
        let inside = []
        for(let j=0; j<draft; j++){
            let random = alphabet.charAt(Math.floor(Math.random() * 26))
            inside.push(random)
        }
        arrBoard.push(inside.join(' '))
    }
    return arrBoard
    
}

var board = generateAlphabetBoard(3)

function checkConsonantInBox(board, rowIdx, colIdx){
    return board
}


console.log(checkConsonantInBox(board))
// console.log(generateAlphabetBoard(3))