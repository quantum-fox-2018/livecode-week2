/*jshint esversion:6*/

function generateAlphabetBoard (number) {
    var numbers = number*number;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var konsonan = 'bcdfghjklmnpqrstvwxyz';

    var resultBoard = [];

    for(let i = 0 ; i < numbers ; i++){
      var tmp = [];
      var str = '';
      for(let j = 0 ; j < numbers ;j++){
        str += alphabet[Math.floor(Math.random()*25)];
        tmp.push(str);
        str = '';
        if(tmp.length === numbers){
          resultBoard.push(tmp);
          tmp = [];
        }
      }
    }
    return resultBoard

  }


console.log(generateAlphabetBoard(3))
