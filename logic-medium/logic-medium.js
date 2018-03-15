function generateAlphabetBoard (num){
    var boardNum = num*num
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var board = []
    for(let i = 0; i<boardNum; i++){
      var col = []
      for(let j = 0; j<boardNum; j++){
          var acak = Math.floor(Math.random()*26)
          col.push(abjad[acak])
      }
      board.push(col)
    }
    return board
}

function checkConsonantInBox(indexRow, indexCol){
    //console.log(boardAbjad)
    var vokal = 'aiueo'
    var batasAtas = indexRow - 1
    var batasBawah = indexRow + 1
    var batasKiri = indexCol - 1
    var batasKanan = indexCol + 1
    if(batasAtas < 0){
        batasAtas = indexRow
    }
    if(batasBawah > boardAbjad.length-1){
        batasBawah = indexRow
    }
    if(batasKiri < 0){
        batasKiri = indexCol
    }
    if(batasKanan > boardAbjad.length-1){
        batasKanan = indexCol
    }
    for(var i = batasAtas; i <= 3 - batasBawah; i ++){
      for(var j = batasKiri; j <= 3 - batasKanan ; j++){
        for(var k =0; k < vokal.length; k++){
          console.log(boardAbjad[i][j], vokal[k],i,j)
          if(boardAbjad[i][j] === vokal[k]){
            return false
          }
        }
      }
    }
    return true
}
var boardAbjad = generateAlphabetBoard(3)
console.log(boardAbjad)
console.log(checkConsonantInBox(3,3))
