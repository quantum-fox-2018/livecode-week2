function generateAlphabetBox(dimensi) {
  var panjang = dimensi * dimensi
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var arrHasil = [];
  var arrSementara = []
  for (var i = 0; i < panjang; i++)
    for (var j = 0; j < panjang; j++) {
      var random = Math.floor(Math.random() * alphabet.length)
      arrSementara.push(alphabet[random])
      if (arrSementara.length == panjang)  {
        arrHasil.push(arrSementara)
        arrSementara = []
      }
    }
    return arrHasil;
}

function checkConsonantInBox(dimensi, index, row) {
  var board = generateAlphabetBox(dimensi)
  console.log(board)
  var mulaiIndexDari = Math.floor(index/dimensi) * dimensi
  var mulaiRowDari = Math.floor(row/dimensi) * dimensi
  var bool = false;

  for (var i = mulaiRowDari; i < mulaiRowDari + dimensi; i++) {
    for (var j = mulaiIndexDari; j < mulaiIndexDari + dimensi; j++) {
      if (board[i][j] == 'a' || board[i][j] == 'i' || board[i][j] == 'u' || board[i][j] == 'e' || board[i][j] == 'o') {
        console.log(board[i][j])
        return false
      }
    }
  }
  return true
}

// console.log(generateAlphabetBox(3))
console.log(checkConsonantInBox(3, 2, 2))
