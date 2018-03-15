function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function boxAlpha(size) {
  var arrLuar = [];
  for(var i = 0; i < size; i++) {
    var arrDalam = [];
    for(var j = 0; j < size; j++) {
      var alphabets = String.fromCharCode(Math.floor(getRandom(65, 90)));
      arrDalam.push(alphabets);
    }
    arrLuar.push(arrDalam);
  }
  return arrLuar;
}

console.log(boxAlpha(9));
