function generateAlphabetBoard(num) {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let board = [];

    for (let i = 0; i < num * num; i++) {
        let arrTemp = [];
        for (let j = 0; j <  num * num; j++) {
            let randomChar = Math.floor(Math.random() * alphabet.length - 1) + 1;
            arrTemp.push(alphabet[randomChar]);
        }

        board.push(arrTemp);
    }

    return board;
}

function checkConsonantInBox(row, col, num) {
    let boardAlphabet = generateAlphabetBoard(num);
    for(let i = 0; i < boardAlphabet.length; i++) {
    }
}

checkConsonantInBox(0, 0, 3);

