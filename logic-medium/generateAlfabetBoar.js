
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
// console.log(generateAlphabetBox(3))

// # Release 1
function checkConsonantInBox(row,column,dimensi){
  let board = generateAlphabetBox(dimensi)
  let posisiRow = Math.floor((row/dimensi)*dimensi) // rumusnya aga-aga lupa ey, sebenarnya buat nyari posisiX
  let posisiColumn = Math.floor((column/dimensi)*dimensi) // rumusnya aga-aga lupa ey, sebenarnya buat nyari posisiY
  // console.log(posisiRow)
  // console.log(posisiColumn)
  // misal koordinat [0,0]
  // posisiRow = 3
  // posisiColumn = 3
  //---------------------------
  let arrBox = []
  let panjangRow = posisiRow + dimensi
  let tinggiColoum = posisiColumn + dimensi

  for(let i=posisiRow; i<panjangRow; i++){
    let arrKoordinat = []
    for(let j=posisiColumn; j<tinggiColoum; j++){
      arrBox.push(board[i][j])
      // arrKoordinat.push(board[i][j])
    }
    // console.log(arrKoordinat)
    // arrBox.push(arrKoordinat)
  }
  // console.log(arrBox)
  // console.log(arrBox)
  // let hurufVokal = 'AIUEO'
  if(arrBox.indexOf('A')!==-1 || arrBox.indexOf('I')!==-1 || arrBox.indexOf('U')!==-1 || arrBox.indexOf('E')!==-1 || arrBox.indexOf('O')!==-1){
    return false
  }else {
    return true
  }

}
console.log(checkConsonantInBox(2,4,3))
