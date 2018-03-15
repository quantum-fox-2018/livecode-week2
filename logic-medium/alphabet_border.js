const alphabets = 'abcdefghijklmnopqrstuvwxyz';

function generateAlphabetBoard(border_length){
  let board = [];
  let increment = Math.sqrt(border_length);
  let check_result = [];

  for(let row = 0; row < border_length; row++){
    board[row] = [];
    for(let col = 0; col < border_length; col++){
      board[row][col] = alphabets[Math.floor(Math.random() * alphabets.length)];
    }
  }

  console.log(board);

  for(let rowIndex = 0; rowIndex < board.length; rowIndex+= increment){
    for(let colIndex = 0; colIndex < board.length; colIndex+= increment){
      let check = checkConsonantInBox(board, [rowIndex,colIndex], [rowIndex+increment,colIndex+increment]);
      check_result.push(check);
    }
  }

  return check_result;
}

function checkConsonantInBox(board,index_start, index_finish){
  if(index_start[0] > board.length || index_start[1] > board.length || index_finish[0] > board.length || index_finish[1] > board.length){
    return;
  }
  for(let row_check = index_start[0]; row_check < index_finish[0]; row_check++){
    for(let col_check = index_start[1]; col_check < index_finish[1]; col_check++){
      if(board[row_check][col_check] === 'a' || board[row_check][col_check] === 'i' || board[row_check][col_check] === 'u' ||
      board[row_check][col_check] === 'e' || board[row_check][col_check] === 'o'){
        return false;
      }
    }
  }
  return true;
}

let board = generateAlphabetBoard(9);
console.log(board);
