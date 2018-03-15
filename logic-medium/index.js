// generate box 
function generateAlphabetBoard(dimensi){
    let boardDimension = dimensi * dimensi;
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arrBoad = [];
    for(let i=0; i<boardDimension; i++){
        let arr = [];
        for(let j=0; j<boardDimension; j++){
            let randomAbjad = abjad[Math.floor(Math.random()*(abjad.length))];
            arr.push(randomAbjad)
        }
        arrBoad.push(arr) //.join(' | '))
    }
    return arrBoad //.join('\n');
}

function checkConsonantInBox(row, column){
    let r=(row * 3) / 3;
    let c=((column * 3)/ 3)-2;
    console.log(`${r} ${c}`)
    let temp = [];
    for(let i=r; i<(r+3); i++ ){
        let arr = [];
        for(let j=c; j<(c+3); j++){
             
            arr.push(generate[i][j])
        }
        temp.push(arr)
    }
    return temp
}

// console.log(generateAlphabetBoard(3))

var generate = generateAlphabetBoard(3);

console.log(generate)
console.log('=========')
console.log(generate)
console.log('=========')
console.log(generate[0])
console.log('==========================')
console.log(checkConsonantInBox(1,7))
