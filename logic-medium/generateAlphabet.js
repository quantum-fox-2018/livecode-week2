/*jshint esversion:6*/


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

function checkConsonantInBox(board, column, row, value) {

}

console.log(generateAlphabetBoard());
