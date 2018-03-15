function randomHuruf() {
  let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let index = Math.floor(Math.random() * 26);
  return random[index];
}

function generateAlphabetBox(num) {
  let arr = [];
  let str;
  for(let i = 0; i < num; i++) {
    arr.push([]);
    for(let j = 0; j < num; j++) {
      arr[i].push(randomHuruf());
    }
  }
  return arr;
}

function generateAlphabetBoard(num) {
  let board = [];
  for(let i = 0; i < num; i++) {
    board.push([]);
    for(let j = 0; j < num; j++) {
      board[i].push(generateAlphabetBox(num));
    }
  }
  return board;
}

function checkVokal(cek) {
  let vokal = ["A", "I", "U", "E", "O"];
  for(let i in vokal) {
    if(vokal[i] == cek) {
      return true;
    }
  }
  return false;
}

function checkConsonantInBox(board, row, col) {
  let checkRow = Math.floor(row/board.length);
  let checkCol = Math.floor(col/board.length);

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board.length; j++) {
      if(checkVokal(board[checkRow][checkCol][i][j])) {
        return false;
      }
    }
  }
  return true;
}

let board = generateAlphabetBoard(3);

for(let i in board) {
  for(let j in board[i]) {
    console.log(board[i][j]);
  }
  console.log();
}

console.log("0, ", checkConsonantInBox(board, 0, 0));
console.log("1, ", checkConsonantInBox(board, 0, 4));
console.log("2, ", checkConsonantInBox(board, 0, 7));
console.log("3, ", checkConsonantInBox(board, 4, 0));
console.log("4, ", checkConsonantInBox(board, 4, 4));
console.log("5, ", checkConsonantInBox(board, 7, 7));
console.log("6, ", checkConsonantInBox(board, 7, 0));
console.log("7, ", checkConsonantInBox(board, 7, 4));
console.log("8, ", checkConsonantInBox(board, 7, 7));
