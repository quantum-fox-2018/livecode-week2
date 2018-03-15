function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
let size = 0
let resultArr = []
let vocal = ["A", "I", "U", "E", "O"]

function checkConsonantInBox(row, column){
  //create inner box
  let counter = 0
  let AngkaArr = []
  let tempAngkaArr = []
  for (var i = 0; i < size*size; i++) {
    tempAngkaArr.push(i)
    counter++
    if (counter === size) {
      AngkaArr.push(tempAngkaArr)
      counter = 0
      tempAngkaArr = []
    }
  }

  let rowCoordinat = 0
  let ColumCoordinat = 0
  for (var i = 0; i < AngkaArr.length; i++) {
    if (AngkaArr[i].indexOf(row) > -1) {
      rowCoordinat = AngkaArr[i][0]
    }

    if (AngkaArr[i].indexOf(column) > -1) {
      ColumCoordinat = AngkaArr[i][0]
    }
  }

  console.log(AngkaArr);
  console.log(rowCoordinat, ColumCoordinat);

  for (var i = rowCoordinat; i < rowCoordinat+size; i++) {
    for (var j= ColumCoordinat; j < ColumCoordinat+size; j++) {
      if (vocal.indexOf(resultArr[i][j]) > -1) {
        return true;
      }
    }
  }
  return false;
}

function generateAlphabetBoard(ukuran){
  size = ukuran
  let sizeBox = ukuran*ukuran
  for (var i = 0; i < sizeBox; i++) {
    let tempArr = []
    for (var j = 0; j < sizeBox; j++) {
      tempArr.push(String.fromCharCode(getRandomInt(65, 91)))
    }
    resultArr.push(tempArr)
  }
  return resultArr
}

console.log(generateAlphabetBoard(4));
console.log(checkConsonantInBox(15,11))
