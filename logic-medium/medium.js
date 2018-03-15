function generateAlphabetBox(num) {
  let size = num*num;
  let arrBox = [];

  for (let row = 0; row < size; row++) {
    let arrRow = [];
    for (let col = 0; col < size; col++) {
      let alphabet = randomAlphabet();
      arrRow.push(alphabet);
    }
    arrBox.push(arrRow);
  }

  console.log(arrBox);
  let box = 0;

  for (let row = 0; row < size; row+=num) {
    let status = false;
    for (let col = 0; col < size; col+=num) {
      status = checkConsonantInBox(arrBox, row, col, num)
      if (status) {
        console.log(`box ${box} : tidak ada huruf vokal`);
        box++;
      } else {
        console.log(`box ${box} : ada huruf vokal`);
        box++;
      }
    }
  }

}

function checkConsonantInBox(arrBox, row, col, num) {
  let vocalAlphabet = 'AIUEO'
  let row0 = Math.floor(row / num) * num;
  let col0 = Math.floor(col / num) * num;

  for (let i = row0; i < row0+num; i++) {
    for (let j = col0; j < col0+num; j++) {
      for (let a in vocalAlphabet) {
        if (vocalAlphabet[a] == arrBox[i][j]) {
          return false;
        }
      }
    }
  }
  return true;
}

function randomAlphabet() {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var result = alphabet[Math.floor(Math.random() * 26)];
  return result;
}

generateAlphabetBox(3);
