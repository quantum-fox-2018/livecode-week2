function generateAlphabetBoard(n){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let boardSize = n * n;
  let board = [];

  for (let i = 0; i < boardSize; i++) {
      let boardHorizontal = [];

      for (let j = 0; j < boardSize; j++) {

          let alphabetIndex = Math.floor(Math.random() * 25);
          let currentAlphabet = '';
          for (let k = 0; k < alphabet.length; k++) {
              if(k == alphabetIndex){
                currentAlphabet = alphabet[k];

              }
          }

          boardHorizontal.push(currentAlphabet);

      }
      board.push(boardHorizontal);
  }

  return board;

}


function checkConsonantInBox(row, column){
  let board = generateAlphabetBoard(3);
  let vocals = 'aiueo';
  let isConsonant = true;
  let box = [];
  let rowMin = 0;
  let rowMax = 2;
  let columnMin = 0;
  let columnMax = 2;

  let checkRowBox = function(row){
    if(row >= rowMin && row <= rowMax){
      row = rowMin;
      return row;
    }else{
      rowMin += 3;
      rowMax += 3;
      return checkRowBox(row);
    }
  }

  let checkColumnBox = function(column){
    if(column >= columnMin && column <= columnMax){
      column = columnMin;
      return column;
    }else{
      columnMin += 3;
      columnMax += 3;
      return checkRowBox(column);
    }
  }

  row = checkRowBox(row);
  column = checkColumnBox(column);
  // return column;
  // console.log(board)

  for(let i = column; i < column+3; i++){
      for(let j = row; j < row+3; j++){
        box.push(board[i][j]);
      }
  }

  for (let i = 0; i < box.length; i++) {
      for(let j = 0; j < vocals.length; j++){
          if(box[i] == vocals[j]){
            isConsonant = false;
          }
      }
  }

  // console.log(board);
  // console.log(box);
  return isConsonant;

}

console.log(checkConsonantInBox(2, 4));













//
