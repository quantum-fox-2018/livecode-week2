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
    str = "";
    for(let j = 0; j < num; j++) {
      str+=randomHuruf();
    }
    arr[i].push(str);
  }
  return arr;
}

console.log(generateAlphabetBox(3));

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

let board = generateAlphabetBoard(3);
console.log(board);
for(let i in board) {
  for(let j in board[i]) {
    console.log(board[i][j]);
  }
  console.log();
}

function checkConsonantInBox(row, col) {
  if(row )
}
