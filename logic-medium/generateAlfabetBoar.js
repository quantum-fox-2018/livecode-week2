
// # Release 0
function generateAlphabetBox(dimensi){
  let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // let testrandom = Math.floor(Math.random()*(25)+1)
  // return testrandom
  let arrBoard = []
  let dimensional = dimensi*dimensi
  for(let i=0; i<dimensional; i++){
    let arrRow = []
    for(let j=0; j<dimensional; j++){
      let angkaRandom = Math.floor(Math.random()*(25)+1)
      arrRow.push(huruf[angkaRandom])
    }
    arrBoard.push(arrRow)
  }
  return arrBoard
}
console.log(generateAlphabetBox(3))

// # Release 1
function checkConsonantInBox(row,column,dimensi){
  let board = generateAlphabetBox(dimensi)
  let posisiRow = Math.round((row/dimensi)*dimensi)
  let posisiColumn = Math.round((column/dimensi)*dimensi)
  // console.log(posisiRow)
  // console.log(posisiColumn)
  let arrBox = []
  for(let i=posisiRow; i<dimensi; i++){
    let arrKoordinat = []
    for(let j=posisiColumn; j<dimensi; j++){
      arrKoordinat.push(board[i])
      arrKoordinat.push(board[j])
    }
    arrBox.push(arrKoordinat)
  }
  console.log(arrBox)

}
console.log(checkConsonantInBox(2,4,3))
