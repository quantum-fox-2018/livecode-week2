function generateAlphabetBoard(num){
  let board = []
  let abjad = 'abcdefghijklmnopqrstuvwxyz'
  for(let i=0; i<num*num; i++){
    let line = []
    for(let j=0; j<num*num; j++){
      let random = Math.floor(Math.random()*26)
      line.push(abjad[random])
    }
    board.push(line)
  }
  return board
}

function checkConsonantInBox(y,x,num){
  let myBoard = generateAlphabetBoard(num)
  console.log(myBoard.join('\n'))
  console.log(`Box in column ${x} and row ${y}`);
  let row = Math.floor(y/num)*num
  let col = Math.floor(x/num)*num
  console.log(`Start Row = ${row}`);
  console.log(`Start Col = ${col}`);
  for(let i=row; i<row+num; i++){
    for(let j=col; j<col+num; j++){
      if(myBoard[i][j]=='a' || myBoard[i][j]=='i' || myBoard[i][j]=='u' || myBoard[i][j]=='e' || myBoard[i][j]=='o'){
        return false
      }
    }
  }
  return true
}

var grid = 4
// console.log(checkConsonantInBox(4,3,grid));
// console.log(checkConsonantInBox(7,5,grid));
console.log(checkConsonantInBox(1,2,grid));
