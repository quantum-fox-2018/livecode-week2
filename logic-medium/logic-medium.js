function generateAlphabetBoard(length) {
  let size = length*length
  let board = []
  for(let row=0; row<size; row++) {
    board.push([])
    for(let col=0; col<size; col++) {
      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      let random = Math.floor((Math.random()*alphabet.length))
      board[row].push(alphabet[random])
    }
  }
  return board
}

function checkConsonantInBox() {
  let board = generateAlphabetBoard(3)
  
}

console.log('=======3=========')
console.log(generateAlphabetBoard(3))


// console.log('=======4=========')
// console.log(generateAlphabetBoard(4))