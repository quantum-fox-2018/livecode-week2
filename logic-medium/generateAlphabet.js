/*jshint esversion:6*/
// 1. buat function untuk buat Board
// 2.buat function index dari konsonan tsb
// 3. buat function untuk cek row ada huruf konsonan, cek column ada huruf konsonan, 3box dalam board
// 4. buat function check 3 value


var input = Math.pow(Number(process.argv[2]), 2);

function generateAlphabetBoard(num) {
  var board = [];
  for (var i = 0; i < input; i++) {
    var row = [];
    for (var j = 0; j < input; j++) {
      var random = String.fromCharCode(65 + Math.ceil(Math.random() * 26));
      row.push(random);
    }
    board.push(row);
  }
  return board;
}

function checkNolIndex() {
  let arrayIndex = [];
  let hurufHidup = ['A', 'I', 'U', 'E', 'O']; // charAt(65, 73, 69, 79, 85)
  let board = generateAlphabetBoard(num);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] == hurufHidup[j]) {
        arrayIndex.push([i, j]);
      }
    }
  }
  return arrayIndex;
}

function checkConsonantInRow(row, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][row] == value) {
      return true;
    }
  }
  return false;
}

function checkConsonantInColumn(column, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[column][i] == value) {
      return true;
    }
  }
  return false;
}

function checkConsonantIn3Box(column, row, value) {
  let cornerRow = Math.floor(row / 3) * 3;
  let cornerColumn = Math.floor(column / 3) * 3;
  let dimension = 3;

  for (let i = cornerRow; i < cornerRow + dimension; i++) {
    for (let j = cornerColumn; j < cornerColumn + dimension; j++) {
      if (board[i][j] == value) {
        return true;
      }
    }
  }
  return false;
}

function checkTrueValue(column, row, value) {
  if (heckConsonantInColumn(board, column, value) && checkConsonantInRow(board, row, value && checkConsonantInColumn(board, column, value))) {
    return true;
  }
  return false;
}

console.log(generateAlphabetBoard());
console.log(checkConsonantInRow(2, 0, 1));
