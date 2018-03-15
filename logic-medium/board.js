function generateAlphabetBoard(areaBox){
  var alpha='abcdefghijklmnopqrstuvwxyz';
  var areaNum=areaBox*areaBox

  var arrBoard=[]
  for (let i = 0; i < areaNum; i++) {
    arrBoard.push([])
    for (let j = 0; j < areaNum; j++) {
      var rand=alpha[Math.floor(Math.random() * alpha.length)];
      arrBoard[i].push(rand)
    }
  }
  return arrBoard
}

var boardAlpha= generateAlphabetBoard(3);
console.log(boardAlpha);
function checkConsonantInBox(row,col){
  var vokal='aiueo'
  var arrIndex=[]
  var rowArea = Math.floor(row / 3) * 3
  var colArea = Math.floor(col / 3) * 3
  var arrLetter=[]
  for (let i = rowArea; i < rowArea+Math.sqrt(boardAlpha.length); i++) {
    arrLetter.push([])
    for (let j = colArea; j < colArea+Math.sqrt(boardAlpha.length); j++) {
        arrLetter[i].push(boardAlpha[i][j])
    }
  }
  var counter=0
  for (let i = 0; i < arrLetter.length; i++) {
    for (let j = 0; j < arrLetter.length; j++) {
      if(vokal.indexOf(arrLetter[i][j])!==-1)
      counter++
    }
  }
  console.log('\n');
  console.log('Chosen Board');
  console.log(arrLetter);
  if(counter>0){
    console.log(false);
  }
  else{
    console.log(true);
  }

}

checkConsonantInBox(1,8)
