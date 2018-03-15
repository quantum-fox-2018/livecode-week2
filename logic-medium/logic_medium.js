function generateAlphabetBoard(box) {

  var board = []
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < box * box; i++) {

    let row = []

    for (let j = 0; j < box; j++) {

      for (let k = 0; k < box; k++) {

        var random = Math.ceil(Math.random() * alphabet.length-1)

        var area =  alphabet[random]

        row.push(area)

      }

    }

    board.push(row)

  }

  let check = checkConsonantInBox(board)

  console.log(board);

  return check

}

function checkConsonantInBox(board) {

  let vocal = 'AIUEO'

  for (var i = 0; i < board.length; i++) {

    for (var j = 0; j < board[i].length; j++) {

      if (vocal.indexOf(board[i][j]) !== -1) {

        return false

      }

    }

  }

  return true

}

console.log(generateAlphabetBoard(2));
