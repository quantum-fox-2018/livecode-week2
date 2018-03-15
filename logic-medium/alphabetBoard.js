function generateAlphabetBoard(dimensiArea){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let box = dimensiArea *dimensiArea
  // console.log(box);
  let resultBoard = []
  for(let i=0; i<box; i++){
    let arrbox = [];
    for(let j=0; j<box; j++){
      let char = alphabet.charAt(Math.floor(Math.random()* alphabet.length))
      arrbox.push(char)
    }
    resultBoard.push(arrbox)
  }
  return resultBoard
}

function checkConsonantInBox(dimensiArea, row, column){
  let alphabetBoard = generateAlphabetBoard(dimensiArea);
  let box = Math.pow(dimensiArea, 2)
  console.log(alphabetBoard);
  let indexRow = 0;
  let indexColumn = 0;
  if(row > 0 && row <= 3){
    indexRow = 0
  }else if (row >3 && row<=6) {
    indexRow = 3
  }else if(row >7 && row<=9){
    indexRow = 6
  }

  if(column > 0 && column <= dimensiArea){
    indexColumn = 0
  }else if (column >dimensiArea && column <= dimensiArea*2) {
    indexColumn = dimensiArea
  }else if(column >7 && column<=9){
    indexColumn = 6
  }
  let vowel = 'aiueo'
  let result;
  for(let i=indexRow; i<indexRow+dimensiArea; i++){
    for(let j=indexColumn ; j<indexColumn+dimensiArea; j++){
      console.log(alphabetBoard[i][j]);
      console.log(vowel.indexOf(alphabetBoard[i][j]));
      if(vowel.indexOf(alphabetBoard[i][j]) === -1){
        result = true
      }else{
        return false
      }
    }
  }
  return result
}

// console.log(generateAlphabetBoard(3));
console.log(checkConsonantInBox(4,1,5));
