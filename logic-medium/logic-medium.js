function generateAlphabetBoard(input){
  let alphabet  = 'abcdefghijklmnopqrstuvwxyz';
  let board     = [];
  let size      = input*input;

  for(let i = 0; i < size; i++){
    let row = [];
    for(let j = 0; j < size; j++){
      let randomAlphabet = alphabet[Math.round(Math.random() * 25)];
      row.push(randomAlphabet.toUpperCase());
    }
    board.push(row);
  }
  return board;
}

function checkConsonantInBox(input){
  let vocal = 'AIUEO'
  let board = generateAlphabetBoard(input);
  let result = '';
  for(let i = 0; i < input; i++){
    for(let j = 0; j < input; j++){
      if(vocal.indexOf(board[i][j]) == -1){
        result = true;
      } else {
        return false;
      }
    }
    return result;
  }

}

console.log(generateAlphabetBoard(3));
console.log(checkConsonantInBox(3));
