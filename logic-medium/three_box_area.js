

function generateAlphabetBoard(num){
let row =num*num
let col=num*num
var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var result=[]
  for (var i = 0; i < row; i++) {
    var baris = []
    for (var k = 0; k < col; k++) {
      let index= Math.round(Math.random()*25)
      baris.push(abjad[index])
    }
    result.push(baris)
  }
  return checkConsonantInBox(result)
}
generateAlphabetBoard(3);

function checkConsonantInBox(box,three_box_area){
var konsonan='BCDFGHJKLMNPQRSTVWXYZ'
  for (var i = 0; i < box.length; i++) {
      let huruf =box[i]
    for (var j = 0; j < huruf.length; j++) {
      for (var k = 0; k < konsonan.length; k++) {
        if(huruf[j]!==konsonan[k]){// seharusnya cek untuk semua index di area 7 baru return
          return false;
        }
      }
    }
  }
  return true;
}


console.log(checkConsonantInBox(1,7));
