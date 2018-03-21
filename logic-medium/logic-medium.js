var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var dimensi = 4;
//Generate Board
function generateAlphabetBoard(dimensi){
  let alphabetBoard = [];
  let boardArea = dimensi*dimensi

  for(let i=0;i<boardArea;i++){
    alphabetBoard.push([]);
    for(let j=0;j<boardArea;j++){
      let randomAlphabet = Math.floor(Math.random()*Math.floor(26));
      alphabetBoard[i].push(alphabet[randomAlphabet]);
    }
  }
  return alphabetBoard
}

// Generate Group Board
function generateSmallBox(rowChoosed,columnChoosed){
  let alphabetBoard = generateAlphabetBoard(dimensi);
  console.log(alphabetBoard);
  let smallBox = [];
  let coordinateArea = 0;

  for(let i=1;i<=dimensi;i++){
    if(rowChoosed < dimensi*i){
      var coordinateX = coordinateArea;
      break;
    }
    coordinateArea += dimensi;
  }
  coordinateArea =0;

  for(let i=1;i<=dimensi;i++){
    if(columnChoosed < dimensi*i){
      var coordinateY = coordinateArea;
      break;
    }
    coordinateArea += dimensi;
  }

  for(let i=0;i<dimensi;i++){
    smallBox.push([])
    for(let j=0;j<dimensi;j++){
      smallBox[i].push(alphabetBoard[i+coordinateX][j+coordinateY]);
    }
  }
  console.log(smallBox);
  return smallBox
}

//Check consonant box
function checkConsonantInBox(rowChoosed,columnChoosed){
  let smallBox = generateSmallBox(rowChoosed,columnChoosed);

  for(let i=0;i<smallBox.length;i++){
    for(let j=0;j<smallBox.length;j++){
      for(let counter=0;counter<alphabet.length;counter=counter+4){
        if(smallBox[i][j] == alphabet[counter]){
          return false;
        }
        if(counter>=8){
          counter=counter+2;
        }
      }
    }
  }

  return true
}

console.log(checkConsonantInBox(15,15));
