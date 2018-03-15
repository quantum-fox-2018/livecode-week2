function generateAlphabetBoard(dimensiBox) {
  let PxL = dimensiBox*dimensiBox
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let board = []

  for (var i = 0; i < PxL; i++) {
    var arrRow = []
    for (var j = 0; j < PxL; j++) {
      arrRow.push(alphabet[Math.floor(Math.random()*26)])
    }
    board.push(arrRow)
  }
  return board
}

function checkConsonantInBox(row, column, dimensiBox) {
  var board = generateAlphabetBoard(dimensiBox)
  var vocal = ['A','I','U','E','O']
  var coori = 0
  var coorj = 0
  var batasi = dimensiBox
  var batasj = dimensiBox
  console.log(board);
  // row menyamping, column kebawah
  if (row < dimensiBox) {
    coori = 0
  } else if (row >= dimensiBox && row < (dimensiBox*2)) {
    coori = dimensiBox
    batasi = (dimensiBox*2)
  } else if (row >= (dimensiBox*2)) {
    coori = (dimensiBox*2)
    batasi = (dimensiBox*3)
  }

  if (column < dimensiBox) {
    coorj = 0
  } else if (column >= dimensiBox && column < (dimensiBox*2)) {
    coorj = dimensiBox
    batasj = (dimensiBox*2)
  } else if (column >= (dimensiBox*2)) {
    coorj = (dimensiBox*2)
    batasj = (dimensiBox*3)
  }


  // while (i< batasi) {
  //   while (j< batasj) {
  //     if (vocal.includes(board[i][j]) === true) {
  //       return false
  //     }
  //     console.log(board[i][j]);
  //     j++
  //   }
  //   i++
  // }

  for (var i = coori; i < batasi; i++) {
    for (var j = coorj; j < batasj; j++) {
      if (vocal.includes(board[i][j]) === true) {
        return false
      }
      // console.log(board[i][j]);
    }
  }
  // console.log(i);
  // console.log(j);
  // console.log(batasi);
  // console.log(batasj);
  return true
}


console.log(checkConsonantInBox(1,2, 3));
// console.log(generateAlphabetBoard(3));
