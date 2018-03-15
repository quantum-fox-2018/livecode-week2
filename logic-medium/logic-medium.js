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

function checkConsonantInBox(length, row, col) {
  console.log(`Membuat board dengan ukuran ${length*length} dan mengecek huruf konsonan pada area box dengan row: ${row}, col: ${col}`)
  let board = generateAlphabetBoard(length)
  console.log(board)

  for(let i= (row-(row % length)); i<length*((row % length) +1); i++) {
    console.log("ini row",i)
    for(let j= (col-(col % length)); j<length*((col % length) +1); j++) {
      console.log("ini col",j)
      // console.log(board[i][j])
      let vocal = 'AIUEO'
      for(let k=0; k<vocal.length; k++) {
        if(board[i][j] == vocal[k]) {
          console.log(`terdapat huruf vocal ${vocal[k]}`)
          return false
        }
      }
    }
  }
  console.log(`tidak terdapat huruf vocal apapun`)
  return true

}

console.log('============3==============')
console.log(checkConsonantInBox(3,3,0))


// console.log('============4==============')
// console.log(checkConsonantInBox(4,0,0))